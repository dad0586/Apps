import { useState } from "react";
import './form.scss';

const MyForm = () => {
    const data = [
        { name: "Sut", mahsulotId: 0 },
        { name: "Kefir", mahsulotId: 1 },
        { name: "Sir", mahsulotId: 2 },
    ];

    const products = [
        { name: "Musaffo", id: 0 },
        { name: "Nestle", id: 0 },
        { name: "Biolife", id: 0 },
        { name: "Kefir 1", id: 1 },
        { name: "Kefir 2", id: 1 },
        { name: "Kefir 3", id: 1 },
        { name: "Sir 1", id: 2 },
        { name: "Sir 2", id: 2 },
        { name: "Sir 3", id: 2 },
    ];

    const [selectedId, setSelectedId] = useState(null);

    const handleDataClick = (id) => {
        setSelectedId(id);
    };

    return (
        <>
            <div className="mahsulotlar">
                {data.map((item) => (
                    <h1 key={item.mahsulotId} onClick={() => handleDataClick(item.mahsulotId)}>
                        {item.name}
                    </h1>
                ))}
            </div>
            <div className="products">
                {products
                    .filter((product) => product.id === selectedId)
                    .map((product, key) => (
                        <button key={key}>{product.name}</button>
                    ))}
            </div>
        </>
    );
};

export default MyForm;
