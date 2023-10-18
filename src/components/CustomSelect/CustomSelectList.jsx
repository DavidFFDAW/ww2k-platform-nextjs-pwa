import React from 'react';

export default function WrestlerCustomSelectList({ zindex, list, image, name, select, height }) {
    const style = {
        zIndex: zindex,
    };
    if (Boolean(height)) style.height = height;

    return (
        <div className="custom-select-result-listing" style={style}>
            {list.map((item, index) => {
                const imageItem = item[image];
                const nameItem = item[name];
                const img = imageItem ? imageItem : '/noimage.jpg';

                return (
                    <div key={index} className="custom-select-result pointer" onClick={_ => select(item)}>
                        <div className="custom-select-result-image flex start al-center gap-small">
                            <div className="backgroundimg" style={{ backgroundImage: `url(${img})` }}></div>
                            <p>{nameItem}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
