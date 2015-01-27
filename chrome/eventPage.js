var ddp = new MeteorDdp('ws://localhost:3000/websocket');
ddp.connect().done(function () {
    console.log('Connected');
});
