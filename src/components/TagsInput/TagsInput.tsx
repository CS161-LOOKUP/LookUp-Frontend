import React from "react"
import PropTypes from "prop-types"

interface Props {
  tags: string[]
  handleAdd(tag: string): void
  handleRemove(index: number): void
}

const TagsInput: React.FC<Props> = props => {
  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (target.value !== "") {
      event.preventDefault()
      props.handleAdd(target.value)
      props.tags
      target.value = ""
    }
  }

  const removeTags = (index: number) => {
    props.handleRemove(index)
  }

  return (
    <div className="tags-input">
      <ul id="tags">
        {props.tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
      />
    </div>
  )
}
TagsInput.propTypes = {
  tags: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

export default TagsInput
