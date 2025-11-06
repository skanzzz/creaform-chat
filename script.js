var initESW = function(gslbBaseURL) {
        embedded_svc.settings.extraPrechatFormDetails = [{
            "label":"First Name",
            "transcriptFields": ["FirstName__c"]
                },{
                "label":"Last Name",
                "transcriptFields": ["LastName__c"]
                },{
                "label":"Email",
                "transcriptFields": ["Email__c"]
                },{
                "label":"Phone",
                "transcriptFields": ["Phone__c"]
                },{
                "label":"Company",
                "transcriptFields": ["Company__c"]
                },{
                "label":"Source",
                "value":"Engineering",
                "displayToAgent": true,
                "transcriptFields": ["Source__c"]
        }];

        embedded_svc.settings.extraPrechatInfo = [
                {

                    "entityFieldMaps": [
                        {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"LastName",
                            "isExactMatch":false,
                            "label":"Last Name"
                        },
                        {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"FirstName",
                            "isExactMatch":false,
                            "label":"First Name"
                        },

                        {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"Email",
                            "isExactMatch":true,
                            "label":"Email"

                        }],
                    "entityName":"Lead",
                    "saveToTranscript":"LeadId",
                    "linkToEntityName": "LiveChatTranscript",
                    "linkToEntityField": "LeadId",
                }
        ];
        embedded_svc.settings.displayHelpButton = true;
        embedded_svc.settings.language = '';
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
			'https://creaform--uat2025.sandbox.my.salesforce.com',
			'https://creaform--uat2025.sandbox.my.site.com/PartnerPortal',
			gslbBaseURL,
			'00DG1000007JSW3',
			'Live_Chat_Engineering_MLP',
			{
				baseLiveAgentContentURL: 'https://c.la12s-core1.sfdc-58ktaz.salesforceliveagent.com/content',
				deploymentId: '5724z000000k9bX',
				buttonId: '573OO000000Bs1t',
				baseLiveAgentURL: 'https://d.la12s-core1.sfdc-58ktaz.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'Live_Chat_Engineering_MLP',
				isOfflineSupportEnabled: false
			}
		);
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://creaform--uat2025.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW('https://service.force.com');
    }

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');

    // CTA Button Click Handler
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Button clicked! You can customize this action.');
            console.log('CTA button was clicked');
        });
    }

    // Form Submit Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            
            alert('Form submitted! (This is a demo - no data was actually sent)');
            contactForm.reset();
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll (optional)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Example: Dynamic content update
function updateContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

// Example: Fetch data (for API integration)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data fetched:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}