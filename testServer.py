import http.server
import socketserver

# Define the port you want the server to listen on
PORT = 8080

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):    
        self.send_response(401)
        self.end_headers()
        
with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()