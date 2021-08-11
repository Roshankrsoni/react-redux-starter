import React
    // { useEffect }
    from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Form/Button'
import { GET_SPLACE_IMAGE_START } from '../../store/action/test/actionTypes'
import { getSplceImageSelector } from '../../store/selectors/test/selector'
import { ToastContainer } from 'react-toastify'

const Home = ({
    getSplaceImage,
    splace,
    imageData
}) => {

    // useEffect(() => {
    //     console.log('Images==//=>', splace)
    // }, [splace])
    console.log('imageData====>', imageData)
    return (
        <div>
            <br />
            Home
            <Button isSubmitting={splace.Loading} action={() => getSplaceImage(1)}> Get Splace Images </Button>
            <ToastContainer />
            {splace?.Images?.map((data) => {
                return <img src={data.urls.raw} key={data.id} alt="" style={{ height: "400px", border: "solid", margin: '10px' }} />
            })}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getSplaceImage: async (page) => {
        return dispatch({ type: GET_SPLACE_IMAGE_START, page })
    }
})

const mapStateToProps = state => {
    console.log('state===>', state)
    return ({
        imageData: state.splace.Images,
        splace: getSplceImageSelector(state)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);