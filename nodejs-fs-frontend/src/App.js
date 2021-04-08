import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FolderIcon from '@material-ui/icons/Folder';
import '../src/App.css'

function App() {

	const [files, setFiles] = useState([]);

	async function getFiles(){
		let response = await axios.get('http://localhost:3000/');
		setFiles(response.data);
	}

	useEffect(() => {
		getFiles();
	})

	return (
		<div className='container mt-2'>
			<div className="row">
			{
				files.map( (file, index) => (
					<div className="col-lg-4 col-sm-12 col-md-6 mb-2" key={index}>
						<div className={file.isDirectory ? "card h-100 bg-dark text-white" : "card h-100"}>
							{
								file.isDirectory ? (
									<>
										<FolderIcon></FolderIcon>
										<h3>{file.name}</h3>
									</>
								) : (
									<>
										<h3>{file.name}</h3>
									</>
								)
							}
						</div>
					</div>
				))
			}
			</div>
		</div>
	);
}

export default App;
