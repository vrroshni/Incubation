import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';


function SideBar() {
	const { viewdetail, viewDetails } = useContext(AuthContext)
	const Navigate = useNavigate()
	return (
		<>
		<div>
			<div className="deznav">
				<div className="deznav-scroll">
					<ul className="metismenu" id="menu">
						<li>
							<a className="has-arrow ai-icon" aria-expanded="false" onClick={() => {
								Navigate('/applications')
							}} >
								<i className="flaticon-025-dashboard"></i>
								<span className="nav-text">ALL</span>
							</a>
						</li>
						<li>
							<a className="has-arrow ai-icon" aria-expanded="false" onClick={() => {
								Navigate('/pending')
							}}>
								<i className="flaticon-025-dashboard"></i>
								<span className="nav-text">PENDING </span>
							</a>
						</li>
						<li>
							<a className="has-arrow ai-icon" aria-expanded="false" onClick={() => {
								Navigate('/approved')
							}}>
								<i className="flaticon-025-dashboard"></i>
								<span className="nav-text">APPROVED </span>
							</a>
						</li>
						<li>
							<a className="has-arrow ai-icon" aria-expanded="false" onClick={() => {
								Navigate('/rejected')
							}}>
								<i className="flaticon-025-dashboard"></i>
								<span className="nav-text">DECLINED </span>
							</a>
						</li>
						
						<li>
							<a className="has-arrow ai-icon" aria-expanded="false" onClick={() => {
								Navigate('/allslots')
							}}>
								<i className="flaticon-025-dashboard"></i>
								<span className="nav-text">SLOT BOOKING</span>
							</a>
						</li>
						<li>
							<a className="has-arrow ai-icon" aria-expanded="false">
								<i className="flaticon-025-dashboard"></i>
								<span className="nav-text">ALLOTTED</span>
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p><strong>WeHelp</strong> © 2022 All Rights Reserved</p>
						<p className="fs-12">Made with <span className="heart"></span> by RoshniVR</p>
					</div>
					<div className="ps__rail-x" style={{ left: " 0px", bottom: "-323px" }}><div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div>
					<div className="ps__rail-y" style={{ top: '323px', height: "330px", right: "0px" }}><div className="ps__thumb-y" tabIndex="0" style={{ top: "120px", height: "123px" }}></div></div>
				</div>
			</div>
		</div>

<div className="modal fade" id="exampleModalCenter">
<div className="modal-dialog modal-dialog-centered" role="document">
	
	<div className="modal-content">
		<div className="modal-header">
			<h5 className="modal-title">{viewdetail && viewdetail.company_name} </h5>
			<button type="button" className="btn-close" data-bs-dismiss="modal">
			</button>
		</div>
		<div className="modal-body">
			<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
		</div>
		<div className="modal-footer">
			<button type="button" data-bs-dismiss="modal" className="btn btn-danger light">Close</button>
		</div>
	</div>

</div>
</div>
</>
	)
}

export default SideBar