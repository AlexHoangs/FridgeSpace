function IsLoading(progress) {
    return (
        <div>
            <progress className="form-control" value={progress} max="100">
            {progress}%{' '}
            </progress>{' '}
            <p className="text-center py-0 my-0">Converting:- {progress} %</p>
        </div>
    );
}

export default IsLoading;