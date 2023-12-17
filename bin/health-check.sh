DEFAULT_PORT=3100
api_port=$1

if [ -z "$api_port" ]; then
    echo "No argument supplied"
    api_port=$DEFAULT_PORT
fi
response=$(curl -s http://localhost:$api_port/health-check)
response=(${response[@]}) # convert to array
if [ -z "$response" ]; then
    echo "http://localhost:$api_port/health-check - {"success":false}"
else
    echo "http://localhost:$api_port/health-check - $response"
fi
