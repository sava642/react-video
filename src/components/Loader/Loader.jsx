export const Loader = () => {

	return (
		<div class="d-flex justify-content-center " style={{
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
		}}>
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}
