import { useState, useEffect } from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    const [seafood, setSeafood] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/seafood")
            .then(res => {
                setSeafood(res.data)
            }
            )
    }, [])

    return (
        <>
            <div className="row">
                {seafood.map(item => {
                    return (
                        <>
                            <Card className="col-4 mb-2">
                                <Card.Img variant="top" src={item.imgUrl} height="300px" width="100px" />
                                <Card.Body>
                                    <Card.Title>{item.productName}</Card.Title>
                                    <Card.Text>{item.price}</Card.Text>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button variant="primary">Đặt hàng</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })}

            </div>

        </>
    )
}

export default Home