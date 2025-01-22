import Image from "next/image";

export default function AboutTab(){
    return(
        <section>
            <h1
                className="capitalize font-bold text-[2rem] mb-4"
            >
                about us
            </h1>
            <p
                className="mb-4"
            >
                I think your best bet would be to start or join a startup. 
                That's been a reliable way to get rich for hundreds of years.
                The word "startup" dates from the 1960s, but what happens in 
                one is very similar.
            </p>
            <div
                className="mb-4"
            >
                <Image
                    src='/assets/images/myPhoto.jpg'
                    alt="photo"
                    className="w-full"
                    width={300}
                    height={150}
                />
            </div>
            <p
                className="mb-4"
            >
                To be a movie-besotted adolescent in the ’70s and early ’80s 
                was to experience, in real time and at an impressionable age, 
                performances that would go on to become icons and monuments. 
                ‘‘This kid doesn’t just act — he takes off into the vapors,’’ 
                wrote Pauline Kael in her review of ‘‘Mean Streets.’’ Not that 
                there was anything airy or abstract about what he was doing, 
                which was transforming himself — physically, vocally, 
                psychologically — with each new role. And in the process, 
                before our eyes, reinventing the art of acting.
            </p>
            <p
                className="mb-4"
            >
                I confess, however, that it took all my professional discipline to resist squandering the time I spent with De Niro on a recent Saturday afternoon in a slack-jawed fanboy recitation of his greatest hits. Oh, my God, you’re Jake LaMotta! You’re Johnny Boy! You’re Travis Bickle! I’m talking to you.
            </p>
            <p
                className="mb-4"
            >
                You forget your dreams, ignore your family, suppress your feelings, neglect your friends, and forget to be happy. Errors of omission are a particularly dangerous type of mistake, because you make them by default.
            </p>
            <p
                className=""
            >
                To the younger generation, though, he is most recognizably Jack Byrnes, Ben Stiller’s impossible father-in-law in the ‘‘Fockers’’ franchise. And as the reliable heavy in a steady stream of action movies and crime dramas, some (but not all) of them quite good. It has become fashionable to suggest that De Niro’s best work is behind him. But nostalgia is a vice, and a survey of the last four decades of movie history reveals that De Niro has never slackened, diminished or gone away but has rather, year in and year out, amassed a body of work marked by a seriousness and attention to detail that was there from the start.
            </p>
        </section>
    )
}