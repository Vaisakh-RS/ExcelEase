import logo from './assets/logo.svg';
import { Button } from './Button';
import '../styles/Home.css';
import { useTypewriter } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Ease', 'Simple', 'Easy', 'Anytime', 'Now...'],
        loop: true,
        delaySpeed: 2500,
    });

    return (
        <>
            <div className="home-container">
                <div className="home-container dark-purple">
                    <div className="text-center sm:text-left">
                        <img
                            src={logo}
                            className="mx-auto sm:mx-0 max-w-xs sm:max-w-full logo"
                            alt="logo"
                        />
                    </div>
                    <h2 className="text-center sm:text-left mt-4 sm:mt-0 lg:text-4xl sm:text-2xl lg:mt-3 font-bold typewriting">
                        Excel {text}
                    </h2>
                    <div className="text-center sm:text-left mt-4 sm:mt-0 lg:mt-9 home-btns">
                        <Button
                            className="btns"
                            buttonStyle="btn--primary"
                            buttonSize="btn--medium"
                        />
                    </div>
                    <div className="mt-8 text-center sm:text-left">
                        <h2 className="text-base sm:text-lg text-white">
                            Excel manipulation made easy.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
