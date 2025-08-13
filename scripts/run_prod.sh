#!/bin/bash

PORT=3001
LOGFILE="./web.log"

echo "🔍 Checking for process on port $PORT..."

PIDS=$(sudo fuser "$PORT"/tcp 2>/dev/null)

if [ -n "$PIDS" ]; then
  echo "🛑 Killing process(es) on port $PORT (PID(s): $PIDS)..."
  for PID in $PIDS; do
    sudo kill -9 "$PID" && echo "✅ Killed PID $PID"
  done
else
  echo "✅ No process running on port $PORT."
fi

echo "🚀 Starting new process with nohup..."
echo "🧪 Running: nohup npm run start -- --env=prod > $LOGFILE 2>&1 &"

# nohup npm run start -- --env=prod > "$LOGFILE" 2>&1 &
nohup npm run start > "$LOGFILE" 2>&1 &

# Chờ một chút để process khởi động và bind vào port
sleep 2

NEW_PID=$(sudo lsof -ti:$PORT)

if [ -n "$NEW_PID" ]; then
  echo "✅ Web restarted (PID: $NEW_PID)."
else
  echo "❌ Failed to start web. Check logs:"
  tail -n 10 "$LOGFILE"
fi

echo "👉 tail -f $LOGFILE"
