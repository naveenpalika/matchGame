import './index.css'

const ImageItem = props => {
  const {imageItem, imageTab} = props
  const {id, thumbnailUrl} = imageItem

  const onImageTab = () => {
    imageTab(id)
  }

  return (
    <li className="image-item">
      <button className="button-img" type="button" onClick={onImageTab}>
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
