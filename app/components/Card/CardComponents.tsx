import React from 'react'

const CardComponents = ({ imageSrc, alt, text }) => {
    return (
        <div className="text-center flex flex-col items-center gap-4">
            <Image
                src={imageSrc}
                alt={alt}
                width={150}
                height={150}
            />
            <span className="font-site">
                {text.split('<br />').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </span>
        </div>
    )
}

export default CardComponents