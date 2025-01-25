import Image from "next/image";

export default function HappyClients(){
    return(
        <section>
            <h1
                className="capitalize font-heading font-bold text-[1.5rem] md:text-[2rem] mb-4"
            >
                happy client
            </h1>
            <p
                className="mb-4"
            >
                I think your best bet would be to start or join a startup. 
                That is been a reliable way to get rich for hundreds of years.
                The word startup dates from the 1960s, but what happens in 
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
                I confess, however, that it took all my professional 
                discipline to resist squandering the time I spent with
                 De Niro on a recent Saturday afternoon in a slack jawed 
                 fanboy recitation of his greatest hits. Oh, my God, you are 
                 Jake LaMotta You are Johnny Boy You are Travis Bickle I am talking to you.
            </p>
            <p
                className="mb-4"
            >
                You forget your dreams, ignore your family, suppress your 
                feelings, neglect your friends, and forget to be happy. 
                Errors of omission are a particularly dangerous type of 
                mistake, because you make them by default.
            </p>
            <p
            >
                To the younger generation, though, he is most recognizably 
                Jack Byrnes, Ben Stillers impossible father in law in the 
                Fockers franchise. And as the reliable heavy in a steady stream 
                of action movies and crime dramas, some but not all of them 
                quite good. It has become fashionable to suggest that De Niros 
                best work is behind him. But nostalgia is a vice, and a survey 
                of the last four decades of movie history reveals that De Niro 
                has never slackened, diminished or gone away but has rather, year 
                in and year out, amassed a body of work marked by a seriousness 
                and attention to detail that was there from the start.
            </p>
        </section>
    )
}