import React from "react";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  let initialValues = {
		name: "",
		description: "",
		createdAt: "",
		img: "",
	};

	const onSubmit = (data) => {
		let arg = {
			name: data.name,
			description: data.description,
			img: data.img,
			createdAt: data.createdAt,
			isLiked: false,
		};
	};

	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		// validationSchema,
		onSubmit,
	});
  return (
    <div>

			<div>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center",
						height: "400px",
					}}
					onSubmit={handleSubmit}
				>
					<Typography variant="h6" color="primary">
						Contactanos
					</Typography>
					<TextField
						id="outlined-basic"
						label="Nombre completo"
						variant="outlined"
						name="name"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						id="outlined-basic"
						label="email"
						variant="outlined"
						name="createdAt"
						onChange={handleChange}
						fullWidth
					/>

					<Button type="submit" variant="contained" color="primary">
						Agregar
					</Button>
				</form>
			</div>
     
    
    </div>
  );
};

export default Form;
