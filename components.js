/* global AFRAME THREE */

if (typeof AFRAME === "undefined") {
    throw "Component attempted to register before AFRAME was available.";
}

const arrow = document.getElementById('arrow');

AFRAME.registerComponent('drag-rotate-component', {
    schema: { speed: { default: 10 } },
    init: function () {
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;
        document.addEventListener('mousedown', this.OnDocumentMouseDown.bind(this));
        document.addEventListener('mouseup', this.OnDocumentMouseUp.bind(this));
        document.addEventListener('mousemove', this.OnDocumentMouseMove.bind(this));
    },
    // When mouse down, save x and y coordinates of mouse position
    OnDocumentMouseDown: function (event) {
        this.ifMouseDown = true;
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
    },
    OnDocumentMouseUp: function () {
        this.ifMouseDown = false;
    },
    OnDocumentMouseMove: function (event) {
        if (this.ifMouseDown) {
            // Get difference between current mouse position and previous mouse position
            var temp_x = event.clientX - this.x_cord;
            var temp_y = event.clientY - this.y_cord;

            this.el.object3D.rotateZ(temp_x * this.data.speed / 1000);
            // If change in mouse position is primarily vertical
            // if (Math.abs(temp_y) < Math.abs(temp_x)) {
            //     this.el.object3D.rotateZ(temp_x * this.data.speed / 1000);
            // }
            // else {
            //     this.el.object3D.rotateZ(temp_y * this.data.speed / 1000);
            // }
            this.x_cord = event.clientX;
            this.y_cord = event.clientY;
        }
    }
});
