   
    var now = new Date();
    var hour = now.getHours();

    if(hour < 12)
    window.alert("Good Morning");
    if(hour >= 12) {
        hour = hour - 12;

        if(hour < 6)
            window.alert("Good Afternoon");
        if(hour >= 6)
        window.alert("Good Evening");
    }
