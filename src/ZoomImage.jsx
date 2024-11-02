import { Sprite, useTick } from "@pixi/react";
import { useState } from "react";

const ZoomImage = ({ image, initialX, initialY, initialHeight, initialWidth, zoomX, zoomY }) => {
    const [x, setX] = useState(initialX);
    const [y, setY] = useState(initialY);
    const [height, setHeight] = useState(initialHeight);
    const [width, setWidth] = useState(initialWidth);

    useTick(delta => {
        const zoomRate = 0.005 * delta;
        const offsetX = zoomX - x;
        const offsetY = zoomY - y;
        setX(x - offsetX * zoomRate);
        setY(y - offsetY * zoomRate);
        setHeight(height * (1 + zoomRate));
        setWidth(width * (1 + zoomRate));
    });

    return (<Sprite
        image={image}
        x={x}
        y={y}
        height={height}
        width={width}
        anchor={0.5}
    />);
};

export default ZoomImage;