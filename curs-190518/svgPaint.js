class SVGPaint extends GenericPaint {
    constructor(parent, height, width) {
        super(width, height);
        this._parent = parent;
        this.init();
    }

    init() {
        this._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this._svg.setAttribute("width", this.width);
        this._svg.setAttribute("height", this.height);
        this._parent.appendChild(this._svg);
    }

    drawLine(xStart, yStart, xEnd, yEnd) { 
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", xStart);
        line.setAttribute("y1", yStart);
        line.setAttribute("x2", xEnd);
        line.setAttribute("y2", yEnd);
        line.setAttribute("style", `stroke:${this._color};stroke-width:${this._lineWidth}`);
        this._svg.appendChild(line);
    }

    drawCircle(cx, cy, r) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", r);
        circle.setAttribute("style", `stroke:${this._color};stroke-width:${this._lineWidth};fill: none`);
        this._svg.appendChild(circle);
    }
    
    drawRectangle(x, y, width, height) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("style", `stroke:${this._color};stroke-width:${this._lineWidth};fill: none`);
        this._svg.appendChild(rect);
    }

}