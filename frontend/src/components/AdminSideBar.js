import React from 'react'

function SideBar() {
  return (
    <div>

        
        <div className="deznav">
            <div className="deznav-scroll">
				<ul className="metismenu" id="menu">
                    <li><a className="has-arrow ai-icon" href="/" aria-expanded="false">
							<i className="flaticon-025-dashboard"></i>
							<span className="nav-text">Dashboard</span>
						</a>
                        <ul aria-expanded="false">
							<li><a href="index.html">Dashboard Light</a></li>
							<li><a href="index-2.html">Dashboard Dark</a></li>
							
						</ul>

                    </li>
                    
                    
                    
                    

                    
                    
                    
                </ul>
				<div className="copyright">
					<p><strong>WeHelp</strong> © 2022 All Rights Reserved</p>
					<p className="fs-12">Made with <span className="heart"></span> by RoshniVR</p>
				</div>
			</div>
        </div>
        
</div>
  )
}

export default SideBar