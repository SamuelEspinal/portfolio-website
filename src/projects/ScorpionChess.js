import React, { useRef, useState, useEffect } from "react";
import "../styles/ScorpionChess.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import AIGameScreenShotSC from "../rsc/AIGameScreenShotSC.png";
import minmaxDiagram1 from "../rsc/minmax1diagram.png";
import alphaBetaPruningDiagram from "../rsc/alphaBetaPruning.png";
import ScorpionChessImg from "../rsc/scorpionChess.webp";

const ScorpionChess = () => {

  const closingStatementsRef = useRef(null);
  const [atClosingSection, setAtClosingSection] = useState(false);

  const scrollToClosingStatements = () => {
    if (atClosingSection) {
      // Scroll back to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to "Closing Statements" section
      const element = closingStatementsRef.current;
      const offset = window.innerHeight * 0.2; // 20% from the top of the viewport
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = closingStatementsRef.current;
      if (!element) return;

      // Check if the "Closing Statements" section is in view
      const elementPosition = element.getBoundingClientRect();
      const isInView =
        elementPosition.top >= 0 &&
        elementPosition.bottom <= window.innerHeight;

      setAtClosingSection(isInView);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const minMaxCode = `
public int min(final Board board, final int depth) {
  if (depth == 0) {
      this.boardsEvaluated++;
      this.freqTable[this.freqTableIndex].increment();
      return this.evaluator.evaluate(board, depth);
  }
  if (isEndGameScenario(board)) {
      return this.evaluator.evaluate(board, depth);
  }
  int lowestSeenValue = Integer.MAX_VALUE;
  for (final Move move : board.currentPlayer().getLegalMoves()) {
      final MoveTransition transition = board.currentPlayer().makeMove(move);
      if (transition.getMoveStatus().isDone()) {
          final int currentValue = max(transition.getToBoard(), depth - 1);
          if (currentValue < lowestSeenValue) {
              lowestSeenValue = currentValue;
          }
      }
  }
  return lowestSeenValue;
}

public int max(final Board board, final int depth) {
  if (depth == 0) {
      this.boardsEvaluated++;
      this.freqTable[this.freqTableIndex].increment();
      return this.evaluator.evaluate(board, depth);
  }
  if (isEndGameScenario(board)) {
      return this.evaluator.evaluate(board, depth);
  }
  int highestSeenValue = Integer.MIN_VALUE;
  for (final Move move : board.currentPlayer().getLegalMoves()) {
      final MoveTransition transition = board.currentPlayer().makeMove(move);
      if (transition.getMoveStatus().isDone()) {
          final int currentValue = min(transition.getToBoard(), depth - 1);
          if (currentValue >= highestSeenValue) {
              highestSeenValue = currentValue;
          }
      }
  }
  return highestSeenValue;
}
`;

  const alphaBetaPruningCode = `
private int min(final Board board,
                    final int depth,
                    final int highest,
                    final int lowest) {
  if (depth == 0 || BoardUtils.isEndGame(board)) {
      this.boardsEvaluated++;
      return this.evaluator.evaluate(board, depth);
  }
  int currentLowest = lowest;
  for (final Move move : MoveSorter.STANDARD.sort((board.currentPlayer().getLegalMoves()))) {
      final MoveTransition moveTransition = board.currentPlayer().makeMove(move);
      if (moveTransition.getMoveStatus().isDone()) {
          final Board toBoard = moveTransition.getToBoard();
          currentLowest = Math.min(currentLowest, max(toBoard,
                  calculateQuiescenceDepth(toBoard, depth), highest, currentLowest));
          if (currentLowest <= highest) {
              return highest;
          }
      }
  }
  return currentLowest;
}

private int max(final Board board,
                    final int depth,
                    final int highest,
                    final int lowest) {
  if (depth == 0 || BoardUtils.isEndGame(board)) {
      this.boardsEvaluated++;
      return this.evaluator.evaluate(board, depth);
  }
  int currentHighest = highest;
  for (final Move move : MoveSorter.STANDARD.sort((board.currentPlayer().getLegalMoves()))) {
      final MoveTransition moveTransition = board.currentPlayer().makeMove(move);
      if (moveTransition.getMoveStatus().isDone()) {
          final Board toBoard = moveTransition.getToBoard();
          currentHighest = Math.max(currentHighest, min(toBoard,
                  calculateQuiescenceDepth(toBoard, depth), currentHighest, lowest));
          if (currentHighest >= lowest) {
              return lowest;
          }
      }
  }
  return currentHighest;
}
`;

 const scoringCode = `
private static int score(final Player player,
                             final int depth) {
  return  mobility(player) + kingThreats(player, depth) + attacks(player) +
      castle(player) + pieceEvaluations(player) + pawnStructure(player) +
      kingSafety(player);
}
`;

  return (
    <div className="chess-game-page">
      <button onClick={scrollToClosingStatements} className="scroll-button">
        {atClosingSection ? "Back to Top" : "Jump to Closing Statements"}
      </button>
      <div className="chess-game-header">
        <h1>Scorpion Chess</h1>
      </div>
      <div className="chess-game-content">
        <div className="chess-game-description">
          <div className="chess-game-image">
            <img
              src={ScorpionChessImg}
              alt="Alpha-Beta Diagram"
              className="chess-game-image"
            />
          </div>
          <br></br>
          <div className="chess-game-links">
            <a href="https://github.com/SamuelEspinal/ScorpionChess/tree/main" target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
            <a
              href="/ScorpionChess.jar"
              download
              className="download-button"
            >
              Download Scorpion Chess JAR
            </a>
          </div>
          <br></br>
          <br></br>
          <p>
            This is <span className="word-highlight">Scorpion Chess.</span> A Chess engine with an AI that can play against you, built all in Java. This project is something I hold dear 
            as the game of Chess has been a beautiful part of my life and I hope to share my passion of the game with others. <span className="word-highlight">Try out the game (go to project details for instructions)</span>, look at the source code,
            and if you are interested, check out my in depth breakdown of the AI in the <span className="word-highlight">"Deep Dive into the Code"</span> section. 
          </p>
          <br></br>
          <p>
            Also, please refer to my closing statement, where I have linked the YouTube channels of the creators who made the tutorials I followed along with 
            for this project, as well as giving me ideas to take it further in the future. 
          </p>
          <br></br>
          <p>
            They provided the foundations for this project, and have given me a base to build off of. I have learned much about 0Sum
            algorithms and concepts from these tutorials, expressed through my deep dive into the code. I hope you enjoy...
          </p>
          <br></br>
          <br></br>
          <div id="project-details" className="chess-game-header">
            <h1>Project Details</h1>
          </div>
          <ul>
            <li>Fully Developed in the Java Programming Language</li>
            <li>Front End and UI done with JFrame</li>
            <li>Back End Logic done entirely in Java</li>
            <li>Features a smart chess AI with strategic capabilities</li>
            <li>User-friendly interface and gameplay experience</li>
          </ul>
          <br></br>
          <p>
            <span className="word-highlight">To run the chess engine:</span>
            <li>Download the JAR file by clicking the download button.</li>
            <li>Ensure you have Java installed on your system.</li>
            <li>Run: <span className="word-highlight"><code>java -jar ScorpionChess.jar</code></span> where it is saved.</li>
          </p>
          <br></br>
          <div className="chess-game-header">
            <h1>Deep Dive into the Code</h1>
          </div>
        </div>
        <div className="chess-game-image">
          <img
            src={AIGameScreenShotSC}
            alt="AI Game Screen Shot"
            className="chess-game-image"
          />
          <p className="chess-game-image-caption">Above image taken from the start of a game vs the AI (Black player)</p>
        </div>
        <div className="chess-game-description">
          <br></br>
          <p>
            The AI in my engine uses a <span className="word-highlight">Min-Max Algorithm</span> to determine the best move. 
            The Min-Max Algorithm is a decision making method used in zero-sum games and artificial intelligence.
            It works by creating a tree where each node in the tree represents a certain state in the game,
            branching out into all potential moves by both players (limited to a certain defined depth). At the terminal nodes of the tree,
            a heuristic evaluation function is applied to estimate the desirability of the corresponding game state for the player.
          </p>
          <br></br>
          <p>
            The algorithm alternates between two objectives: <span className="word-highlight">maximizing</span> the score at levels corresponding to the player's turn 
            and <span className="word-highlight">minimizing</span> it at levels representing the opponent's turn, under the assumption that both players play optimally.
            By recursively propagating these values back through the tree, the minimax algorithm identifies the sequence of moves that leads to the most favorable outcome for the player. 
            This method is <span className="word-highlight">effective</span> but as the depth of the search is increased the <span className="word-highlight">computational complexity is increased.</span>
          </p>
        </div>
        <div className="chess-game-image"> 
          <img
            src={minmaxDiagram1}
            alt="Min-Max Diagram"
            className="chess-game-image"
          />
           <p>
            Diagram of the Min-Max Algorithm.
          </p>
        </div>
        <br></br>
        <div className="chess-game-description">
          <div className="chess-game-header">
            <h2>Minimax Algorithm Code:</h2>
          </div>
          <div className="code-block">
            <SyntaxHighlighter language="java" style={atomDark} showLineNumbers={true}>
              {minMaxCode.trim()}
            </SyntaxHighlighter>
          </div>
          <br></br>
          <p>
            So whats going on in the above code? 
            The min and max methods are part of the Min-Max <span className="word-highlight">algorithm used to evaluate the best moves in a chess game.</span> 
            The min method tries to find the lowest score (worst case) for the opponent, 
            while the max method looks for the highest score (best case) for the player. 
            Both methods work recursively by simulating all possible moves for the current player. 
            If the game reaches the maximum search depth or a terminal state (like checkmate or stalemate), 
            they stop and return the board's evaluation score, calculated by a heuristic function. 
            The methods alternate between min and max to simulate optimal play from both sides, 
            gradually propagating the best scores up the recursion tree.
          </p>
          <br></br>
          <p>
            Remember how I said the greater the depth the worse the time complexity? With Stockfish (the greatest chess AI ever made) 
            being able to go to depths of 30 casually, doing so on just the min-max algorithm would be impossible, 
            or rather would take an absurd amount of time. After all <span className="word-highlight">Min-Max has time and space complexity of O(bm) </span>
            where b is the game-branching factor and m is the maximum depth. 
            So how can we increae the efficiency of the min-max algorithm? One way is to use Alpha-Beta Pruning.
          </p>
          <br></br>
          <br></br>
          <div className="chess-game-header">
            <h2>Alpha Beta Pruning:</h2>
          </div>
          <p>
            Alpha-Beta Pruning is an optimization layered onto the already established Min-Max algorithm that makes it 
            <span className="word-highlight"> significantly more efficient by skipping over branches of the game tree that do not influence the final decision. </span>
            Alpha represents the best score that the maximizing player is guaranteed so far, 
            and beta represents the best score that the minimizing player is guaranteed so far. 
          </p>
          <br></br>
          <p>
            The key idea behind Alpha-Beta Pruning is that <span className="word-highlight">once a move is found to be worse than an already evaluated option for the player, 
            there is no point in continuing to evaluate the rest of that moves tree.</span> For example, if the minimizing player finds a move with a 
            value lower than or equal to the current alpha value of the maximizing player, then the maximizing player will never choose that branch,
            and the algorithm can safely stop evaluating it.
          </p>
        </div>
        <div className="chess-game-image">
          <img
            src={alphaBetaPruningDiagram}
            alt="Alpha-Beta Diagram"
            className="chess-game-image"
          />
          <p>
            Diagram of the Alpha-Beta Algorithm.
          </p>
        </div>
        <div className="chess-game-description">
          <p>
            Lets break down the diagram of the Alpha-Beta Pruning Algorithm. The process we just went over happens when the algorithm
            is exploring the left branch of node B. Node D's evaluation results in a score of 3, which is passed up to B as its current beta 
            value (the minimizing player is seeking to reduce the score). When the algorithm evaluates node E, it encounters a terminal 
            value of 5. Since this value is greater than the current beta of 3, it is clear that this branch cannot 
            result in a better outcome for the minimizing player. As a result, the algorithm <span className="word-highlight">prunes</span> the rest of E's 
            subtree, skipping the evaluation of any further nodes under E.
          </p>
          <br></br>
          <p>
            Similarly, when the algorithm explores the right branch of node A, it evaluates node C. At node F, the 
            best value found is 1, which is passed up to C as its beta value. When the algorithm reaches node G, 
            it finds a value of 7, which is greater than C's beta value of 1. Since the minimizing player at C will 
            never select a move with a value higher than 1, the algorithm <span className="word-highlight">prunes</span> the rest of G's subtree, avoiding
            any unnecessary computation.
          </p>
          <br></br>
          <p>
            It is important for me to be clear that <span className="word-highlight">Alpha-beta pruning does not change the result of the Min-Max algorithm</span> but reduces the number of 
            nodes that need to be evaluated, which makes the algorithm faster and more efficient. The more 
            efficiently the bounds (alpha and beta) are updated during the tree traversal, the greater the 
            reduction in the number of branches explored. <span className="word-highlight">This allows the algorithm to explore deeper levels of 
            the tree in the same amount of time,</span> making it particularly powerful in games like chess, where the 
            branching factor of possible moves is very high.
          </p>
          <br></br>
          <p>
            You ready for a code breakdown? Lets dive into it. First off, the code:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="java" style={atomDark} showLineNumbers={true}>
              {alphaBetaPruningCode.trim()}
            </SyntaxHighlighter>
          </div>
          <br></br>
          <p>
            The min function is responsible for simulating the minimizing player (the opponent) and finding the 
            lowest evaluation score that the maximizing player might face. It takes the current board state, the 
            remaining search depth, and the current alpha (highest) and beta (lowest) values as parameters. 
            First, <span className="word-highlight">the function checks if the search depth has reached zero or if the game is in an endgame state.
            If so, it evaluates the board position using a predefined evaluator, increments the count of evaluated 
            boards, and returns the evaluation score.</span>
          </p>
          <br></br>
          <p>
            If the search continues, it initializes currentLowest with the beta value (lowest). Then, for each 
            legal move sorted by a MoveSorter (I'll explain this later), the function attempts to make the move and generates a new 
            board state. If the move is valid, it calls the max function on the resulting board to evaluate the 
            opponent's response. The currentLowest value is updated with the minimum of its current value 
            and the result from the max function.
          </p>
          <br></br>
          <p>
            <span className="word-highlight">The alpha-beta pruning occurs when currentLowest becomes less than or equal to highest.</span> This 
            means the maximizing player will never allow this position to occur, so further exploration of this 
            branch is unnecessary, and the function immediately returns the alpha value (highest). 
            The max function operates similarly, except it simulates the maximizing player (the current player) 
            and finds the highest evaluation score possible. Instead of minimizing the score, it maximizes it by 
            using the Math.max function. <span className="word-highlight">Alpha-beta pruning in the max function occurs when currentHighest 
            exceeds or equals lowest,</span> indicating that the minimizing player would never allow this position.
          </p>
          <br></br>
          <p>
            <span className="word-highlight">Both functions work together recursively to evaluate all potential moves while pruning unnecessary 
            branches of the game tree, making the search more efficient.</span> The key difference lies in the role of 
            each function—min seeks to minimize the evaluation score for the maximizing player, while max 
            seeks to maximize it.
          </p>
          <br></br>
          <p>
            Below is a table breaking down the surface differences between the code in the two algorithms Min-Max and Alpha-Beta Pruning:
          </p>
          <br></br>
          <table className="summary-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Min-Max Algorithm</th>
                <th>Alpha-Beta Pruning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parameters</td>
                <td>board, depth</td>
                <td>board, depth, highest, lowest</td>
              </tr>
              <tr>
                <td>Algorithm</td>
                <td>Basic Min-Max</td>
                <td>Alpha-beta Pruning Min-Max</td>
              </tr>
              <tr>
                <td>Move Sorting</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Pruning</td>
                <td>No</td>
                <td>Yes (using highest and lowest)</td>
              </tr>
              <tr>
                <td>Endgame Handling</td>
                <td>Basic check</td>
                <td>Basic check + Quiescence search</td>
              </tr>
              <tr>
                <td>Efficiency</td>
                <td>Explores all branches</td>
                <td>Prunes unnecessary branches</td>
              </tr>
              <tr>
                <td>Use Case</td>
                <td>Simple game tree search</td>
                <td>Optimized for deeper game tree exploration</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
          <br></br>
          <div className="chess-game-header">
            <h2>Move Sorting and Quiescence Search:</h2>
          </div>
          <p>
            The next question we need to ask ourselves is how can we make this algorithm even more efficient and effective? 
            The answer: Move Sorting and Quiescence Search. <span className="word-highlight">Both are designed to improve efficiency and accuracy of the evaluation process.</span>
          </p>
          <br></br>
          <p>
            Let's start with Move Sorting. <span className="word-highlight">Move sorting works by reordering the possible moves at each node so that the most promising ones 
            —those likely to produce the best outcomes—are considered first.</span> Alpha-beta pruning becomes far more effective when good moves 
            are evaluated earlier, as they quickly tighten the bounds of alpha and beta. For instance, in the case of a maximizing player, 
            if the first move already produces a very high score, many subsequent branches will be pruned because 
            they cannot improve upon that value. 
          </p>
          <br></br>
          <p>
            Sorting the moves is typically guided by heuristics or pre-evaluation techniques, such as prioritizing captures, checks, 
            or moves that involve strong positional gains. <span className="word-highlight">By addressing the most impactful moves early, the algorithm reduces the number of nodes it 
            needs to examine, significantly speeding up the search.</span>
          </p>
          <br></br>
          <p>
            Quiescence search, on the other hand, addresses a major limitation of the standard alpha-beta algorithm: the instability 
            caused by evaluating positions that are in the middle of dynamic changes, such as a series of 
            captures or checks. In such volatile positions, the evaluation function may give a misleading score, as 
            it does not account for immediate tactical threats or opportunities. <span className="word-highlight">Quiescence search extends the 
            search beyond the defined depth limit but only for "noisy" moves—those involving captures, checks, 
            or other significant tactical events.</span>
          </p>
          <br></br>
          <p>
            Once the position stabilizes, meaning there are no immediate 
            threats or tactical exchanges to calculate, the quiescence search terminates and the position is 
            evaluated. This ensures that the algorithm does not incorrectly assess a volatile position as good or 
            bad based on incomplete information. The only downside is that quiescence search can be computationally 
            expensive, especially in more complex positions.
          </p>
          <br></br>
          <br></br>
          <div className="chess-game-header">
            <h2>Scoring Positions:</h2>
          </div>
          <p>
            If you've been following along, you might be wondering how a move's score is actually evaluated. 
            After all, these algorithms rely on comparing scores to determine the best move for the player to 
            make. There are numerous ways to evaluate a position and assign it a score. In my chess project, I've 
            opted for a simpler approach for now. While there are additional factors I plan to incorporate in the 
            future to enhance the AI's strength, let's focus on the core scoring method for the time being. 
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="java" style={atomDark} showLineNumbers={true}>
              {scoringCode.trim()}
            </SyntaxHighlighter>
          </div>
          <br></br>
          <p>
            The scoring method above calculates the evaluation score for a given player by summing up several key aspects of 
            their position on the chessboard. <span className="word-highlight">It takes into account factors like mobility, which measures how 
            many legal moves the player can make, reflecting their ability to control the board. King threats 
            evaluate the immediate danger posed to the opponent's king, scaled by the depth of the search, 
            emphasizing threats as the position gets deeper in the tree.</span>
          </p>
          <br></br>
          <p>
            <span className="word-highlight">Attacks quantify the player's pressure on the opponent's pieces, while castle rewards players for maintaining 
            castling rights or having successfully castled, as this generally improves king safety. Piece evaluations assess 
            the value of the player's pieces based on material and positional strength, while pawn structure evaluates the 
            player's pawn formations, such as passed pawns or weaknesses. Finally, king safety evaluates how 
            well-protected the player's own king is.</span>
          </p>
          <br></br>
          <p>
            For a more detailed look of the methods involved in the scoring process, you can refer to 
            the source code in the StandardBoardEvaluator class in the Github repository.
          </p>
          <br></br>
          <br></br>
          <div id="closing-statements" ref={closingStatementsRef} className="chess-game-header">
            <h1>Closing Statements</h1>
          </div>
          <p>
            The topics we discussed about my Scorpion Chess are <span className="word-highlight">a core part of only the AI side of the game.</span> There is so much more to go into 
            involving the logic and the actual engine of the game. If you stuck through that VERY long read, I hope you for one, enjoyed it, and two
            felt inspired to maybe try creating your own chess game. Chess has been a passion of mine for the last few years, so working on this project 
            was extremely fullfilling and enjoyable. 
          </p>
          <br></br>
          <p>
            Please check out <span className="word-highlight">"Software Architecture & Design"</span> and <span className="word-highlight">"Sebastian Lague"</span> on youtube as their videos and walkthroughs
            have been invaluable to me as I worked on this project along side their series. <span className="word-highlight">I have included links to their channels below.</span>
          </p>
          <br></br>
          <p>
            If you have any questions or suggestions, please feel free to reach out to me. I'm always eager to learn and grow as a developer.
            <br></br>
            <br></br>
            <span className="word-highlight">- Samuel</span>
          </p>
          <br></br>
          <div className="chess-game-links">
            <a href="https://www.youtube.com/@amir650" target="_blank" rel="noopener noreferrer"> 
              Software Architecture & Design
            </a>
            <a href="https://www.youtube.com/c/SebastianLague" target="_blank" rel="noopener noreferrer">
              Sebastian Lague
            </a>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ScorpionChess;
