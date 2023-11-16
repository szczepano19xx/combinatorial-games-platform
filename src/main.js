const alphaBetaWorker = new Worker("alphabeta.js");

// rejestracja obsługi zdarzenia 'message' wysłanego przez 'worker'
alphaBetaWorker.addEventListener(
    "message",
    function (e) {
        alert("otrzymano odpowiedź: " + e.data);
    },
    false
);

alphaBetaWorker.postMessage({
    state: { a: 1, b: 2 },
    player: 1,
    maxDepth: 5,
});
