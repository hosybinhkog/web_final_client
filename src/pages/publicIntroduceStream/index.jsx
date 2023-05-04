import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import thumbnail from '../../assets/images/defaultThumbnail.jpg'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../Components/Loading'
import ButtonSubmit from '../../Components/Commom/ButtonSubmit'
import {
  getIntroduceStreamerById,
  clearIntroduceStreamerSuccess,
  FollowStreamer,
} from '../../store/actions/userActions'
import ItemStatusFollow from '../../Components/CategoryItem/components/handleItem/itemStatusFollow'

const PublicIntroduceStream = () => {
  const param = useParams()
  const { streammer, loading } = useSelector(
    (state) => state.getIntroduceStreamerById
  )

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getIntroduceStreamerById(param.id))
  }, [param.id])
  if (loading) return <Loading />
  return (
    <>
      {user && user.isStreammer ? (
        <div className="flex flex-col max-w-[1280px] ">
          <div className=" ">
            {!streammer?.thumbnails ? (
              <img className=" object-cover w-full" src={thumbnail} alt="" />
            ) : (
              <img
                className="object-cover min-w-[1280px] w-full max-h-[600px] h-full"
                src={
                  streammer?.thumbnails
                    ? streammer?.thumbnails[0]?.url
                    : streammer?.thumbnails[0]?.url
                    ? streammer?.thumbnails[0]?.url
                    : null
                }
                alt=""
              />
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div>
                {' '}
                {!streammer?.imgs || !streammer?.imgs?.url ? (
                  <img
                    className="border rounded-[50%] object-cover w-40"
                    src={thumbnail}
                    alt=""
                  />
                ) : (
                  <img
                    className="border-[1px] border-[solid] border-[gray] rounded-[50%] object-cover w-[200px] h-[200px] mt-[-36px] ml-7"
                    src={
                      streammer?.imgs
                        ? streammer?.imgs?.url
                        : streammer?.imgs?.url
                        ? streammer?.imgs?.url
                        : null
                    }
                    alt=""
                  />
                )}
              </div>
              <div className="flex items-center justify-centerm">
                <span className="text-3xl font-bold ">
                  {streammer?.displayName}
                </span>
              </div>
            </div>
            {/* <div className="flex justify-center  items-center">
              <ButtonSubmit
                titleButton={'Follow'}
                cssButton={'button-create'}
              />
            </div> */}
            <div>{user && <ItemStatusFollow streamerId={param.id} />}</div>
          </div>

          <div
            className="text-lg mt-10"
            dangerouslySetInnerHTML={{ __html: streammer?.discription }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default PublicIntroduceStream
