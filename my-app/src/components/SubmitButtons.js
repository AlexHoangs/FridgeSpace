import Tesseract from 'tesseract.js';

function SubmitButtons(setIsLoading, setImage, theImg, setText, setProgress) {

    const handleSubmit = () => {
        setIsLoading(true);
        Tesseract.recognize(theImg, 'eng', {
          logger: (m) => {
            console.log(m);
            if (m.status === 'recognizing text') {
              setProgress(parseInt(m.progress * 100));
            }
          },
        })
          .catch((err) => {
            console.error(err);
          })
          .then((result) => {
            console.log(result.data);
            setText(result.data.text);
            setIsLoading(false);
          });
      };

    return (
        <div>

        <input type="file"
                onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control mt-5 mb-2"/>

        <input type="button" onClick={handleSubmit} className="btn btn-primary mt-5" value="Convert"/>
        </div>
    );
}

  
export default SubmitButtons;


