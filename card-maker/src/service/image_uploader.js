class ImageUploader {
	async upload(file) {
		if (!file) {
			return;
		}
		const url = "https://api.cloudinary.com/v1_1/hongbeen/image/upload";
		const formData = new FormData();

		formData.append("file", file);
		formData.append("upload_preset", "vvm7vf7f");

		const result = await fetch(url, {
			method: "POST",
			body: formData,
		});

		return await result.json();
	}
}

export default ImageUploader;
