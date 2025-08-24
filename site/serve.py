#!/usr/bin/env python3
import os
import argparse
import http.server
import socketserver


def parse_args() -> argparse.Namespace:
	parser = argparse.ArgumentParser(description="Serve the mirrored xexeboxes.com site")
	parser.add_argument("--port", type=int, default=int(os.getenv("PORT", "8080")), help="Port to bind")
	parser.add_argument("--dir", default=os.getenv("SITE_DIR", "/workspace/site/xexeboxes.com"), help="Directory to serve")
	return parser.parse_args()


def main() -> None:
	args = parse_args()
	serve_dir = os.path.abspath(args.dir)
	if not os.path.isdir(serve_dir):
		raise SystemExit(f"Directory not found: {serve_dir}")

	os.chdir(serve_dir)
	handler = http.server.SimpleHTTPRequestHandler
	with socketserver.TCPServer(("0.0.0.0", args.port), handler) as httpd:
		print(f"Serving {serve_dir} at http://0.0.0.0:{args.port}")
		try:
			httpd.serve_forever()
		except KeyboardInterrupt:
			print("\nShutting down...")


if __name__ == "__main__":
	main()