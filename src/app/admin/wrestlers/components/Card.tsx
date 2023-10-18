interface WrestlerCardProps {
    wrestler: any;
}

export default function WrestlerCard({ wrestler }: WrestlerCardProps) {
    const imageSrc = wrestler.image_name || '/noimage.jpg';
    // const isReleased = wrestler.status === 'released';

    return (
        <>
            <div className="unlink">
                <div className="w1 wrestler-center flex center al-center">
                    <div className="w90 flex start al-start gap boxed">
                        <div className="wrestler-card__image flex start al-center column">
                            {/* <Image src={imageSrc} width={512} height={512} alt={wrestler.name}></Image> */}
                            <img src={imageSrc} alt={wrestler.name} width={512} height={512} loading="lazy" />
                        </div>
                        <div className="w1 wrestler-card__info">
                            <h3 className="wrestler-card__name">{wrestler.name}</h3>
                            <p className="wrestler-card__description"></p>
                            <p>{wrestler.finisher}</p>
                            <p>{wrestler.status}</p>
                        </div>
                        {/* <WrestlerActions wrestler={wrestler} hire={hire} release={release} isReleased={isReleased} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}