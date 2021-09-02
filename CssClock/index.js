const second = document.querySelector(".second-hand");
        const minute = document.querySelector(".minute-hand");
        const hour = document.querySelector(".hour-hand");

        function sdate() {
            const date = new Date();
            const seconds = date.getSeconds();
            const degrees = ((seconds / 60) * 360) + 90;
            second.style.transform = `rotate(${degrees}deg)`;

            const minutes = date.getMinutes();
            const mindegrees = ((minutes / 60) * 360) + 90;
            minute.style.transform = `rotate(${mindegrees}deg)`;

            const hours = date.getHours();
            const hourdegree = ((hours / 12) * 360) + 90;
            hour.style.transform = `rotate(${hourdegree}deg)`;
            if(seconds==0){
                second.style.transition="none";
            }
            else{
                second.style.transition="all 1s";
            }
        }
        setInterval(sdate, 1000);
