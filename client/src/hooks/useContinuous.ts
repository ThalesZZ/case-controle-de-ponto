import React from "react"
import { useToggle } from "./useToggle"

type ForceRefresh = () => void

export function useContinuous(
    msInterval: number,
    callback: () => void,
    dependencyList: React.DependencyList = []
): ForceRefresh {
    const fetchFlag = useToggle()
    const timer = React.useRef<NodeJS.Timeout>(null)

    React.useEffect(() => {
        Promise.resolve()
            .then(callback)
            .finally(() => (timer.current = setTimeout(fetchFlag.toggle, msInterval)))

        return () => clearInterval(timer.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchFlag.active, ...dependencyList])

    return fetchFlag.toggle
}