const RemoveItem = ({
	value,
	handleRemoveItem,
	isError,
	error,
	isSuccess,
	success,
}) => {
	return (
		<span>
			<button onClick={handleRemoveItem} className={value}>
				✖
			</button>

			{isError && <p className="error">{error}</p>}
			{isSuccess && <p className="success">{success}</p>}
		</span>
	);
};

export default RemoveItem;
