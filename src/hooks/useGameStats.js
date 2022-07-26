import { useCallback, useState } from "react"

function buildGameStats() {
  return ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0
  })
}

export function useGameStats() {
  const [gameStats, setGameStats] = useState(buildGameStats());

  const addLinesCleared = useCallback(() => {

  }, []);

  return [gameStats , addLinesCleared];
}