function alphaBetaNegamax(node, player, depth, alpha, beta, sign = 1) {
    if (depth === 0 || logicOfGame.isTerminal(node.state)) {
        return [logicOfGame.evaluateState(node.state, player)];
    }
    let bestMove = null;
    for (let move of logicOfGame.generateMoves(node.state, node.player)) {
        let [score] = alphaBetaNegamax(
            {
                state: logicOfGame.generateState(node.state, node.player, move),
                player: node.player === "player1" ? "player2" : "player1",
                move,
            },
            player,
            depth - 1,
            -beta,
            -alpha,
            -sign
        );
        score = -score;
        if (score > alpha) {
            bestMove = move;
            alpha = score;
        }
        if (alpha >= beta) {
            return [alpha, bestMove];
        }
    }
    return [alpha, bestMove];
}

this.addEventListener(
    "message",
    function (e) {
        const [score, bestMove] = alphaBetaNegamax(
            {
                state: e.data.state,
                player: e.data.player,
                move: null,
            },
            e.data.player,
            e.data.maxDepth,
            -Infinity,
            Infinity
        );
        this.postMessage([-score, bestMove]);
    },
    false
);
