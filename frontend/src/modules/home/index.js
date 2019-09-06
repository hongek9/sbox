// import React, { PureComponent } from 'react'
// import Snackbar from '../../components/snackbar'
// import Button from '../../components/button'

// import './home.css'
// import Logo from '../../components/logo'

// import { createFile } from '../../api/file'

// export default class Home extends PureComponent {
//   constructor(props) {
//     super(props)

//     this.uploadFile = this.uploadFile.bind(this)
//     this.onSnackbarClose = this.onSnackbarClose.bind(this)

//     this.state = {
//       isSnackbarOpen: false
//     }
//   }


//   uploadFile(e) {
//     console.log(e.target.files);
//     if(e.target.files[0].size >= 10*1024*1024) {
//       console.log('error');
//       this.setState({isSnackbarOpen: true, variant: 'error', message: "This file is too large"})
//     } else {
//       const file = e.target.files[0]
//       createFile(file)
//       .then((response) => {
//       if (response && response.status === 200) {
//           this.setState({ isSnackbarOpen: true, variant:'success', message: `
//           ${response.data.name ? response.data.name : 'File'}
//           uploaded
//         `   })
//         }
//       })
//     }
    
//   }

//   onSnackbarClose(reason) {
//     if (reason === 'clickaway') {
//       return
//     }

//     this.setState({ isSnackbarOpen: false })
//   }

//   render() {
//     return (
//       <div className='home'>
//         <Logo className='logo' />
//         <input
//           accept='*'
//           style={{ display: 'none' }}
//           id='outlined-button-file'
//           type='file'
//           onChange={this.uploadFile}
//         />
//         <label htmlFor='outlined-button-file'>
//           <Button
//             className='upload-button'
//             variant='outlined'
//             size='large'
//             color='primary'
//             component='span'
//           >
//             Upload File
//           </Button>
//         </label>
//         <Snackbar
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left'
//           }}
//           open={this.state.isSnackbarOpen}
//           autoHideDuration={6000}
//           onClose={this.onSnackbarClose}
//           variant={this.state.variant}
//           message={this.state.message}
//         />
//       </div>
//     )
//   }
// }
// Home.propTypes = {}
// Home.defaultProps = {}

import React, { PureComponent } from 'react'
import Snackbar from '../../components/snackbar'
import Button from '../../components/button'

import './home.css'
import Logo from '../../components/logo'

import { createFile } from '../../api/file'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.uploadFile = this.uploadFile.bind(this)
    this.onSnackbarClose = this.onSnackbarClose.bind(this)

    this.state = {
      isSnackbarOpen: false
    }
  }

  uploadFile(e) {
    
    const file = e.target.files[0];
    console.log(file);
    e.target.value=null;
    if(file.size >= 10*1024*1024) {
      console.log('error');
      this.setState({isSnackbarOpen: true, variant: 'error', message: "This file is too large"});
      
    } else {
      createFile(file)
      .then((response) => {
      if (response && response.status === 200) {
          this.setState({ isSnackbarOpen: true, variant:'success', message: `
          ${response.data.name ? response.data.name : 'File'}
          uploaded
        `   })

        }

      })

    }
    
  }

  onSnackbarClose(reason) {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ isSnackbarOpen: false })
  }

  render() {
    return (
      <div className='home'>
        <Logo className='logo' />
        <input
          accept='*'
          style={{ display: 'none' }}
          id='outlined-button-file'
          type='file'
          onChange={this.uploadFile}
        />
        <label htmlFor='outlined-button-file'>
          <Button
            className='upload-button'
            variant='outlined'
            size='large'
            color='primary'
            component='span'
          >
            Upload File
          </Button>
        </label>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.onSnackbarClose}
          variant={this.state.variant}
          message={this.state.message}
        />
      </div>
    )
  }
}
Home.propTypes = {}
Home.defaultProps = {}
