import React from 'react';
import Tesseract from 'tesseract.js';


function DoEverything() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
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

  function ShowRecieptBlank(){
    return(
        <div id = "recieptButton">
            <div id="blankReciept">
                <h1>Your Grocery List</h1>
            </div>

        </div>
    )
}
  function ShowReciept(){
    return(
        <div id="blankReciept">
            <p>Here's what we found</p>
            <textarea
                className="form-control w-100 mt-5"
                rows="30"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

        </div>
    )
}


  return (
    <div style={{ height: '100vh' }}>
      <div>
        <div>
            {!isLoading && !text && (
                <ShowRecieptBlank/>
            )}
          {isLoading && (
            <>
              <progress className="form-control" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="text-center py-0 my-0">Converting:- {progress} %</p>
            </>
          )}
          {!isLoading && !text && (
            <>
              <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control mt-5 mb-2"
              />
              <input
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary mt-5"
                value="Convert"
              />
            </>
          )}
          {!isLoading && text && (
            <ShowReciept/>
          )}

        </div>
      </div>
    </div>
  );
};

export default DoEverything;
