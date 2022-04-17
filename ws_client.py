import asyncio
# import logging
import json
import websockets

# logging.basicConfig(level=logging.INFO)

ws_ip = "ws://localhost:8000"

send_data = {
        "name":["FWS","R"],
        "value":1.1,
        "time":123.4
    }

async def send() :
    async with websockets.connect(ws_ip) as websocket:
        await websocket.send(json.dumps(send_data))

asyncio.run(send())

# async def consumer_handler(websocket: WebSocketClientProtocol) -> None :
#     async for message in websocket :
#         log_message(message)


# async def consume(hostname: str, port: int) -> None :
#     async with websockets.connect(ws_ip) as websocket:
#         await consumer_handler(websocket)

# def log_message(message: srt) -> None:
#     logging.info(f"Message: {message}")

# if __name__ == "__main__" :
#     loop = asyncio.get_event_loop()
#     loop.run_until_comlete(consume(hostname=ws_ip, port=ws_port))
#     loop.run_forever()



