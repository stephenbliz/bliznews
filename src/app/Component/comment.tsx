'use client';
import { RxAvatar } from "react-icons/rx";
import Image from "next/image"

export default function Comment(){
    const comments = [
        {name: 'ola', date: 'jan 16 2013', image: '', message: 'If you have too many tasks to do, or are scattered during your workday, breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now.', id: 1},
        {name: 'ola', date: 'jan 16 2013', image: '/assets/images/newsImage.webp', message: 'If you have too many tasks to do, or are scattered during your workday, breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now.', id: 2},
        {name: 'ola', date: 'jan 16 2013', image: '/assets/images/myPhoto.jpg', message: 'If you have too many tasks to do, or are scattered during your workday, breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now.', id: 3},
        {name: 'ola', date: 'jan 16 2013', image: '', message: 'If you have too many tasks to do, or are scattered during your workday, breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now.', id: 4},
        {name: 'ola', date: 'jan 16 2013', image: '/assets/images/myPhoto.jpg', message: 'If you have too many tasks to do, or are scattered during your workday, breathe. It will help bring you into focus, to concentrate on the most important task you need to be focusing on right now.', id: 5}
    ]
    return(
        <div>
        <h3
            className="mb-4 text-2xl capitalize"
        >
            {comments.length} comments
        </h3>
        <div
            className="flex items-start justify-between flex-wrap gap-y-4"
        >
        {
            comments.map((comment)=>(
                <div
                    className="flex w-full items-start justify-between border border-secondaryColor-100 p-2 md:p-4 lg:p-8"
                    key={comment.id}
                >
                    <div
                        className="w-[4rem] h-[4rem] rounded-full"
                    >
                        {comment.image !== ''?
                            <Image
                                src={comment.image}
                                alt=""
                                height={50}
                                width={50}
                                className="w-[4rem] h-[4rem] rounded-full"
                            />
                            :
                            <span
                                className="text-secondaryColor-100 w-full text-[4rem]"
                            >
                                <RxAvatar />
                            </span>
                        }
                    </div>
                    <div
                        className="w-[80%]"
                    >
                        <div
                            className="mb-4 flex justify-start gap-2 items-start"
                        >
                            <span
                                className="w-fit capitalize text-secondaryColor-300 font-bold"
                            >
                                {comment.name}
                            </span>
                            <span
                                className="w-fit capitalize text-secondaryColor-100 "
                            >
                                {comment.date}
                            </span>
                            <span
                                className="w-fit capitalize text-secondaryColor-100 cursor-pointer hover:text-primaryColor transition duration-300 ease-linear"
                            >
                                reply
                            </span>
                        </div>
                        <p>
                            {comment.message}
                        </p>
                    </div>

                </div>
            ))
        }
        
        </div>
        </div>
    )
}