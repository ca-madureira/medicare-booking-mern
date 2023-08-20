import React from 'react';
import { formateDate } from '../../utils/formateDate';
// import { AiFillStart } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          Todas as avaliações(272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-1- rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ali Ahmed
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate('02-02-2023')}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Medico atencioso!
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <BsFillStarFill key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
