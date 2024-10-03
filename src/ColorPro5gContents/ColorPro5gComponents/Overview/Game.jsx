import React from "react";
import GameBackground from "../../ColorPro5gAssets/Game/GameBackground.png";
import MobileGameBackground from "../../ColorPro5gAssets/Game/MobileGameBackground.png";

function Game() {
  return (
    <div className="s-game">
      <img src={GameBackground} className="GameBackground s-notMobile"></img>
      <img src={MobileGameBackground} className="GameBackground s-mobile"></img>
      <div className="s-gameContent">
        <div className="s-gameContentUp">
          <div className="s-heading">
            <h2>Enjoy Optimal Gaming Performance</h2>
            <p>
              The Color Pro 5G is perfect for maximizing your gaming enjoyment
              with low power consumption, rapid performance, and enhanced image
              processing.
            </p>
          </div>
          <div className="s-content">
            <div className="s-gameSet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M15.8333 3.33325V6.66659M24.1667 3.33325V6.66659M15.8333 33.3333V36.6666M24.1667 33.3333V36.6666M36.6667 24.1666H33.3333M6.66668 15.8333H3.33334M6.66668 24.1666H3.33334M36.6667 15.8333H33.3333M21.1567 14.1666L17.6717 18.3949C17.2983 18.8483 17.565 19.4999 18.175 19.6216L21.825 20.3449C22.475 20.4733 22.7217 21.1949 22.2683 21.6349L17.945 25.8333"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 19.9998C6.66669 13.7148 6.66669 10.5715 8.62002 8.61984C10.5734 6.66817 13.715 6.6665 20 6.6665C26.285 6.6665 29.4284 6.6665 31.38 8.61984C33.3317 10.5732 33.3334 13.7148 33.3334 19.9998C33.3334 26.2848 33.3334 29.4282 31.38 31.3798C29.4267 33.3315 26.285 33.3332 20 33.3332C13.715 33.3332 10.5717 33.3332 8.62002 31.3798C6.66835 29.4265 6.66669 26.2848 6.66669 19.9998Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                Octa-core <br /> <span> 6nm</span>
              </p>
            </div>
            <div className="s-gameSet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6667 10.8334H27.9167C31.4283 10.8334 33.1833 10.8334 34.445 11.6767C34.9904 12.0413 35.4588 12.5097 35.8233 13.0551C36.5967 14.2117 36.6617 15.4334 36.6667 18.3334M20 10.8334L18.945 8.72175C18.07 6.97175 17.27 5.21175 15.3317 4.48508C14.4833 4.16675 13.5133 4.16675 11.5733 4.16675C8.54668 4.16675 7.03334 4.16675 5.89668 4.80008C5.0868 5.25197 4.41857 5.92021 3.96668 6.73008C3.33334 7.86675 3.33334 9.38008 3.33334 12.4067V17.5001C3.33334 25.3567 3.33334 29.2851 5.77334 31.7251C7.94001 33.8917 11.28 34.1367 17.5 34.1634H18.3333M29.26 35.8334H30.74C33.535 35.8334 34.9317 35.8334 35.7983 34.9551C36.6667 34.0767 36.6667 32.6617 36.6667 29.8334V29.3184C36.6667 28.0917 36.6667 27.4784 36.4417 26.9284C36.215 26.3767 35.7867 25.9434 34.9317 25.0767L32.7483 22.8651C32.0533 22.1634 31.7067 21.8117 31.3083 21.5517C30.8589 21.2603 30.3611 21.0515 29.8383 20.9351C29.375 20.8334 28.8833 20.8334 27.9017 20.8334C26.405 20.8334 25.6567 20.8334 25.0733 21.1001C24.4183 21.4001 23.895 21.9334 23.5983 22.5951C23.3333 23.1851 23.3333 23.9434 23.3333 25.4584V29.8334C23.3333 32.6617 23.3333 34.0767 24.2 34.9551C25.0683 35.8334 26.4667 35.8334 29.26 35.8334Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                Storage Type <br /> <span>UMCP </span>
              </p>
            </div>
            <div className="s-gameSet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 11.6666V8.33325C20 7.89122 20.1756 7.4673 20.4882 7.15474C20.8007 6.84218 21.2246 6.66659 21.6667 6.66659C22.1087 6.66659 22.5326 6.49099 22.8452 6.17843C23.1577 5.86587 23.3333 5.44195 23.3333 4.99992V3.33325M16.6667 26.6666L14.1667 24.1666M14.1667 24.1666L11.6667 21.6666M14.1667 24.1666L11.6667 26.6666M14.1667 24.1666L16.6667 21.6666M28.3333 25.8333V22.4999M3.33333 24.1666C3.33333 18.6883 3.33333 15.9483 4.84666 14.1033C5.12348 13.766 5.43274 13.4567 5.76999 13.1799C7.61666 11.6666 10.3533 11.6666 15.8333 11.6666H24.1667C29.6467 11.6666 32.385 11.6666 34.23 13.1799C34.5672 13.4567 34.8765 13.766 35.1533 14.1033C36.6667 15.9499 36.6667 18.6866 36.6667 24.1666C36.6667 29.6466 36.6667 32.3849 35.1533 34.2299C34.8765 34.5672 34.5672 34.8764 34.23 35.1532C32.3833 36.6666 29.6467 36.6666 24.1667 36.6666H15.8333C10.355 36.6666 7.61499 36.6666 5.76999 35.1532C5.43274 34.8764 5.12348 34.5672 4.84666 34.2299C3.33333 32.3833 3.33333 29.6466 3.33333 24.1666Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                Primary Clock Speed <br /> <span> 2.4GHz</span>
              </p>
            </div>
          </div>
        </div>
        <div className="s-gameContentDown">
          <h1>4,20,000*</h1>
          <p>AnTutu Score</p>
        </div>
      </div>
    </div>
  );
}

export default Game;
