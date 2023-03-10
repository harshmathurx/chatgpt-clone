import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className="text-white justify-center items-center flex flex-col h-screen px-2">
            <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
            <div className="scrollbar-hide flex flex-col overflow-auto mb-5 md:mb-0 md:flex-row space-y-8 md:space-x-4 md:space-y-0 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <SunIcon className="h-8 w-8" />
                        <h2>Example</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">Explain Something tome</p>
                        <p className="infoText">
                            What is the difference between a dog an a cat ?
                        </p>
                        <p className="infoText">What is the color of the sun</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <BoltIcon className="h-8 w-8" />
                        <h2>Capabilities</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">Change the ChatPGT Mode to use</p>
                        <p className="infoText">
                            Messages are stored in Firebase Firestore
                        </p>
                        <p className="infoText">
                            Hot Toast notifications when ChatPGT is thinking!
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <ExclamationTriangleIcon className="h-8 w-8" />
                        <h2>Limitations</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">
                            May occasionally generate incorrect information
                        </p>
                        <p className="infoText">
                            May occasionally produce harmful instructions or biased content
                        </p>
                        <p className="infoText">
                            Limited knowledge of world and events after 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home