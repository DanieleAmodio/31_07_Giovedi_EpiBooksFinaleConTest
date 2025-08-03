import React,{useContext, useState} from 'react';
import { Button, Form , Spinner} from 'react-bootstrap';
import { useTheme } from '../context/contextTheme';

function AddComment ({asin,onNewComment}) {
    const [comment,setComment]=useState('');
    const [rate,setRate]=useState(1);
    const [Loading,setLoading]=useState(false);
    const {colorText}= useTheme();

    const handleComment=async(e)=> {
        e.preventDefault();
        const Api_Url= `https://striveschool-api.herokuapp.com/api/comments/`;
       const Api_Key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU5Yjg1MjRlZjFiYzAwMTVkZjVhZDIiLCJpYXQiOjE3NTI4NTg0MDMsImV4cCI6MTc1NDA2ODAwM30.RMtDjGIUuLU4cQgpGrCJit52MvS7pmJgBMGJMrpGOlw"
       setLoading(true);
        try{
            const response=await fetch(Api_Url,{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    Authorization:'bearer '+Api_Key
                },
                body:JSON.stringify({
                    comment,
                    rate,
                    elementId:asin
                })
            });
            if(response.ok){
                setComment('');
                setRate(1);
                onNewComment();
            }else{
                alert(`Errore durante l'invio del commento: ${response.statusText}`);
            }
        }catch(errore){
            console.error("Errore POST: ",errore)
        } finally{
          console.log("Commento inviato:", {comment, rate, elementId: asin});
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }
        
    }
    return (
        <Form onSubmit={handleComment} className="mb-3">
      <h3 className={colorText}>Aggiungi un commento</h3>

      <Form.Group className="mb-2" controlId="commentText">
        <Form.Label className={colorText}>Commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Scrivi il tuo commento..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="rateSelect">
        <Form.Label className={colorText}>Valutazione</Form.Label>
        <Form.Select value={rate} onChange={(e) => setRate(e.target.value)} required>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary" disabled={Loading}>
        {Loading ? (<Spinner/>) : ("Invia")}
      </Button>
    </Form>
  );
};
export default AddComment;