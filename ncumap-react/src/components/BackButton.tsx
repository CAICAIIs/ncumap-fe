const convertCoordinates = (coordinates: number[]) => {

    const top = 28.66776098033687
    const bottom = 28.641503853212868
    const right = 115.81343996831613
    const left = 115.78972714948839
    const blank = 27.8
    const unitY = (top - bottom) / 256
    const unitX = (right - left) / (256 - 2 * blank)
    return [(coordinates[0] - left) / unitX + blank, (coordinates[1] - bottom) / unitY]
}

interface OpenMapProps {
    x?: number;
    y?: number;
}

const OpenMap: React.FC<OpenMapProps> = ({ x, y }) => {
    const defaultX = x ?? 0;
    const defaultY = y ?? 0;

    let [centerX, centerY] = convertCoordinates([defaultX, defaultX]);

    return (
        <div>
            <h1>OpenMap</h1>
        </div>
    )
}






