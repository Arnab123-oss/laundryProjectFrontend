import React from "react";
import "./from.css";
const From = ({setIsOpen}) => {
  function toggleFlipped(element) {
    element.classList.toggle("flipped");
  }
  const handleFormSubmit = () => {
    console.log('Submitted')
  }
  return (
    <div className="form-container" onClick={() => setIsOpen(false)}>
      <section>
        <div className="book" onClick={(event) => event.stopPropagation()}>
        <h1 className="close-button" onClick={() => setIsOpen(false)}>X</h1>
          <div className="pg pg1">
            <div className="second-form">
              <form>
              <label for="clothingType">Type of Clothing:</label>
                    <select id="clothingType" name="clothingType" required>
                        <option value="shirt">Shirt</option>
                        <option value="pants">Pants</option>
                        <option value="dress">Dress</option>
                        <option value="jacket">Jacket</option>
                    </select>
                    
                    <div class="brand-section">
                        <label class="brand-label">Brand Name (optional):</label>
                        <input type="radio" id="brandNike" name="brandName" value="Nike" class="brand-option"/>
                        <label for="brandNike">Nike</label>
                        <input type="radio" id="brandPuma" name="brandName" value="Puma" class="brand-option"/>
                        <label for="brandPuma">Puma</label>
            
                        <input type="radio" id="brandGucci" name="brandName" value="Gucci" class="brand-option"/>
                        <label for="brandGucci">Gucci</label>
            
                        <input type="radio" id="brandPrada" name="brandName" value="Prada" class="brand-option"/>
                        <label for="brandPrada">Prada</label>
            
                        <input type="radio" id="brandLV" name="brandName" value="Louis Vuitton" class="brand-option"/>
                        <label for="brandLV">Louis Vuitton</label>
            
                        <input type="radio" id="brandOther" name="brandName" value="Other" class="brand-option"/>
                        <label for="brandOther">Other</label>
                        <textarea id="pickupAddress" name="pickupAddress" rows="1" required></textarea>
                     
                    </div>
                    
              </form>
              <span style={{ marginRight: "330px" }}></span>
              <button
                className="flip-button"
                onClick={() => toggleFlipped(document.querySelector(".book"))}
              >
                <svg
                  width="39"
                  height="20"
                  viewBox="0 0 92 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M91 21C91.2985 20.7501 68.5 16 64 1M91 21C91 21 68.5 26.5 64 39M91 21H0"
                    stroke="#7e6d91"
                    stroke-width="7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pg pg2">
            <div className="second-form">
              <form>
              <label for="pickupAddress">Pick-up Address:</label>
                <textarea id="pickupAddress" name="pickupAddress" rows="4" required></textarea>

                 <div class="brand-section">
                        <label class="brand-label">Express Service:</label>
                        <br/>
                        <input type="radio" id="brandNike" name="brandName" value="Nike" class="brand-option"/>
                        <label for="brandNike"><i>One day Pick-up and Delivery</i> <p>(Within a day + extra charge included)</p></label>
            
                        <input type="radio" id="brandAdidas" name="brandName" value="Adidas" class="brand-option"/>
                        <label for="brandAdidas"><i>Normal Pick-up & Delivery</i> <p>(Within a week)</p></label>
                    </div>
                    
              </form>


              <div className="submit-section">
              <button
                className="flip-button"
                onClick={() => toggleFlipped(document.querySelector(".book"))}
              >
                <div>
                <svg 
                  width="39"
                  height="20"
                  viewBox="0 0 92 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00269 19C0.704223 19.2499 23.5027 24 28.0027 39M1.00269 19C1.00269 19 23.5027 13.5 28.0027 1M1.00269 19L92.0027 19"
                    stroke="#7e6d91"
                    stroke-width="7"
                  />
                </svg>
                </div>
              </button>
              <button className="flip-buttons" type="submit"  onClick={() => setIsOpen(false)}>
                Save
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default From;
