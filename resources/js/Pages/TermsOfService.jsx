import { Head } from '@inertiajs/react';
import { TopBar, Header, Footer } from '@/Components/Sections/Homepage';

export default function TermsOfService() {
    return (
        <>
            <Head title="Terms of Service" />
            <div className="min-h-screen bg-white">
                <TopBar />
                <Header />
                <main className="py-16 lg:py-24">
                    <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                Terms of Service
                            </h1>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 mb-6">
                                    These Terms govern the use of this Application, and, any other related Agreement or legal relationship with the Owner in a legally binding way. Capitalized words are defined in the relevant dedicated section of this document.
                                </p>

                                <p className="text-gray-600 mb-8">
                                    The User must read this document carefully. They are legally binding, so it is necessary to read them carefully. Keep in mind that some rules might only apply to certain groups of users, but it's always stated in the clause. If there is no mention, it applies to everyone. If any other agreements exist between the website Owner and Sellers, they will have priority over these terms.
                                </p>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">How This Application Works</h2>
                                    <p className="text-gray-600 mb-4">
                                        This Application's operation is governed by regulations that warrant the Owner's compliance. The Owner does not exercise control, monitor, moderate, or inspect Products or Buyers involved in transactions facilitated by this Application. As such, the Owner is absolved of any responsibility for the associations of the parties involved in these transactions, the quality, accuracy, safety, and other properties of Products traded through the Application, or the legal and financial positions of Buyers using the Application.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Users who accept the Terms have unreservedly released and discharged the Owner and its subsidiaries from any legal claims and costs associated with their use of the Platform, including disputes between Users. Furthermore, the Owner has the right to remove any Products that violate the Platform's standards of acceptability at its discretion, and Users using the Application acknowledge and accept the Owner's right to do so.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Use</h2>
                                    <p className="text-gray-600 mb-4">
                                        The conditions set forth in this section apply generally to the use of this Application unless stated otherwise. Additionally, this document will include specific requirements or access limitations applicable to certain scenarios. By accessing this Application, Users agree to the following requirements: Both Consumers and Business Users can use this Application without any restrictions.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content on This Application</h2>
                                    <p className="text-gray-600 mb-4">
                                        All content accessible through this Application's platform is either owned or provided by the Owner or its licensors, unless where specified otherwise.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        The utmost effort is made by the Owner to ensure that no applicable legal provisions or third-party rights are infringed upon by this content.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        However, it may not always be possible to guarantee such a result. In such cases, Users are requested to file any relevant complaints using the contact information given in this document while retaining their legal rights to enforce them.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rights Regarding Content on This Application - All Rights Reserved</h2>
                                    <p className="text-gray-600 mb-4">
                                        The Owner reserves all intellectual property rights to the content available on this Application with all rights reserved.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Users are not permitted to utilize such content that is not necessary or is implicit for proper use of the Service. Specifically, Users are not allowed to modify, publish, download, share, translate, transform, transmit, sublicense, sell, transfer, assign to third parties, create any derivative work from the available content, or allow any third party to initiate such actions through the User device, even without the User's notice.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        However, where explicitly authorized on the Application, Users can download, share, or copy some content available through this Application for personal and non-commercial purposes provided that all copyright attributions and other attributions indicated by the Owner are accurately implemented.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        All statutory limitations or exceptions to copyright shall remain unaffected.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Provided by Users</h2>
                                    <p className="text-gray-600 mb-4">
                                        Users can upload, share, and provide their own content to this Application. By doing so, they confirm that their content is legally permissible and does not violate third-party rights or any statutory provisions.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Upon providing their content to this Application, Users grant the Owner an enduring, non-exclusive, fully paid-up and royalty-free, irrevocable, transferable, sub-licensable, and worldwide license for utilizing, accessing, storing, reproducing, modifying, distributing, publishing, processing content into derivative works, broadcasting, streaming, transmitting, or otherwise exploiting it for Service provision and promotion in any manner or media.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Users relinquish any moral rights concerning the content they provide through the Application, to the extent allowed by applicable law. Moreover, Users acknowledge and accept that all content they provide is subject to the same general conditions applicable to content on this Application.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability for Provided Content</h2>
                                    <p className="text-gray-600 mb-4">
                                        Sole responsibility rests with users for every content they upload, post, share, or provide via this Application. You acknowledge and affirm that the Owner does not filter or moderate user-generated content.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Nevertheless, the Owner reserves the right to remove, delete, block, or rectify the content at its own discretion and without prior notification, and refuse an uploading User access to the Application in the following scenarios:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                        <li>Whenever the content sparks a complaint;</li>
                                        <li>Where there's a notice of intellectual property infringement;</li>
                                        <li>Upon the order of a public authority; or</li>
                                        <li>Where the content creates a risk to Users, third parties, or Service availability.</li>
                                    </ul>
                                    <p className="text-gray-600 mb-4">
                                        Users recognize that removal, deletion, blocking, or rectification of content in the scenarios above doesn't attract compensation, damages, or reimbursement claims. By using this Application, Users indemnify and hold the Owner harmless against every claim and/or damage due to the content they provided on and through this Application.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Access to External Resources</h2>
                                    <p className="text-gray-600 mb-4">
                                        Via this Application, users can reach external resources supplied by third parties. Users confirm and acknowledge that the Owner exerts no influence over the tools and is thus excluded from responsibility for their reachability and content.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Terms and conditions regarding any resources provided by third parties, including but not limited to content usage licenses, are considered as in the framework of third parties' terms and conditions or, if such conditions do not exist, by relevant statutory law.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
                                    <p className="text-gray-600 mb-4">
                                        The usage of this Application and the Service should adhere to its intended purpose and remain in compliance with these Terms and all applicable regulations and laws.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        It's the user's responsibility to ensure that their use of this Application and/or the Service does not violate any third-party rights, laws, or regulations.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Therefore, the rightful Owner reserves the right to take necessary measures in order to protect their legitimacy. This includes restricting user's access to this Application or the Service, and terminating contracts, and reporting any misconduct to the appropriate authorities such as judicial or administrative authorities. Users should not engage or be suspected of engaging in the following activities:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                        <li>Violate any law, regulation, and/or these Terms</li>
                                        <li>Infringe upon any third-party rights</li>
                                        <li>Considerably impair the Owner's legitimate interests</li>
                                        <li>Offend the Owner or any third-party</li>
                                    </ul>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">US Users - Disclaimer of Warranties</h2>
                                    <p className="text-gray-600 mb-4">
                                        Please be advised that the Application is provided on an "as is", "as available" basis, and holds no warranty, whether express, implied, statutory or otherwise, including the warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. The Owner does not guarantee the accuracy, reliability or correctness of the content, nor is there a guarantee that the Service will meet Users' requirements, function uninterrupted or remain secure at all times.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Please note that users download and use the Service at their own risk and bear responsibility for any damage to their device that results from usage. The Service cannot guarantee successful function for all operating systems, browsers or devices, and the Owner is not liable for any damages arising from Service content, operation, or use.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Furthermore, the Owner shall not be responsible for any product or service advertised or offered by third-party providers and the Owner cannot be held liable for any perceived or actual damages arising from transactions between Users and third-party providers of products or services.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Please remember that certain jurisdictions do not allow the exclusion of limitations of implied warranties. Hence, the above exclusions may not apply to some users and Users may exercise other rights that vary from state to state. The disclaimers and exclusions under this agreement shall not apply where prohibited by law.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations of Liability</h2>
                                    <p className="text-gray-600 mb-4">
                                        To the maximum extent allowable by the law, the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees are not liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including damages for loss of profits, goodwill, use, data or other intangible losses, arising from the use or inability to use the Service.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Moreover, the Owner shall not be responsible for any damages, losses, or injuries arising from hacking, unauthorized access, tampering, or use of the Service or user account information.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Likewise, the owner is not liable for errors, inaccuracies, or mistakes in content, personal injury, property damage, and interruption or cessation of the Service. Lastly, the Owner is not accountable for bugs, viruses, trojan horses, or the like, transmitted to or through the Service, or for the errors or omissions in postings, transmissions, or content availability on the Service.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        The section that restricts liability shall apply to the greatest range allowed by law in the relevant jurisdiction, whether the alleged responsibility is grounded in tort, contract, strict liability, negligence, or any other basis. This applies even if the company has been made aware of the potential damage.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        In certain jurisdictions, exclusion or limitation of incidental or consequential damages is not authorized. Hence, the restrictions or exclusions listed above may not be binding for the user. The terms grant specific legal rights to the user, who may have other rights that differ in various jurisdictions. The disclaimers, restrictions, and exclusions of liability listed under the terms will not be applicable to the extent that the applicable law prohibits them.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
                                    <p className="text-gray-600 mb-4">
                                        The User shall defend, hold harmless, and indemnify the Owner, its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees from and against any and all claims, damages, liabilities, losses, costs, or expenses, including reasonable legal fees and expenses, arising out of:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                        <li>(a) User's access to or usage of the Service, including any data or content transmitted or received by User;</li>
                                        <li>(b) User's breach of these terms, including representations and warranties;</li>
                                        <li>(c) User's violation of any third-party rights, e.g., privacy or intellectual property rights;</li>
                                        <li>(d) User's intentional misconduct;</li>
                                        <li>(e) statutory provisions by User or its affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees as allowed by applicable law;</li>
                                        <li>(f) User's violation of any statutory law, rule, or regulation.</li>
                                    </ul>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Standard Clauses</h2>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Waiver Clause</h3>
                                    <p className="text-gray-600 mb-4">
                                        The failure of the Owner to exercise any right or provision under these Terms shall not constitute a waiver of such right or provision. No waiver shall be considered a further or continuing waiver of this provision or any other term.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Interruption of Service</h3>
                                    <p className="text-gray-600 mb-4">
                                        The Owner reserves the right to interrupt the Service for system updates, maintenance, or any other changes with appropriate notice to Users to ensure optimal service levels.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        Within the limits permitted by law, the Owner may decide to suspend or terminate the Service. In case of termination, the Owner will cooperate with Users in compliance with applicable law to enable them to withdraw Personal Data or information.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        In circumstances beyond the Owner's reasonable control, such as "force majeure" (e.g. labor disputes, infrastructural breakdowns, blackouts, etc.), the Service may not be available.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Service Reselling</h3>
                                    <p className="text-gray-600 mb-4">
                                        Users are prohibited from reproducing, duplicating, copying, selling, reselling, or exploiting any portion of this Application or its Service, without the express prior permission of the Owner, granted either directly or through a legitimate reselling programme.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Privacy Policy</h3>
                                    <p className="text-gray-600 mb-4">
                                        To learn more about the use of Personal Data, Users are invited to refer to the privacy policy of this Application.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Intellectual Property Rights</h3>
                                    <p className="text-gray-600 mb-4">
                                        Without prejudice to any more specific provision of these Terms, any intellectual property rights, such as copyrights, trademark rights, patent rights and design rights related to this Application, are the exclusive property of the Owner or its licensors. The protection granted by applicable laws or international treaties related to intellectual property shall apply.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        All trademarks, whether nominal or figurative, as well as any other marks, trade names, service marks, word marks, illustrations, images, or logos related to this Application are, and shall remain, the exclusive property of the Owner or its licensors. These intellectual property rights are subject to the protection granted by applicable laws or international treaties.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Changes to the Terms</h3>
                                    <p className="text-gray-600 mb-4">
                                        The Owner retains the right to modify these terms and conditions at any time, and the User will be notified of such changes in an appropriate manner. Such changes will only apply to future relations with the User. If the User does not wish to be bound by the changes, they must terminate the Agreement by not continuing to use the Service. Failing to accept the updated Terms may entitle either party to terminate the Agreement. The previous version will apply to the relationship before the User's acquiescence, and the User can obtain any previous version from the Owner. If deemed necessary by any applicable laws, the Owner will specify the effective date of the modified Terms.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Assignment of Contract</h3>
                                    <p className="text-gray-600 mb-4">
                                        The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms after taking into account the User's legitimate interests. The provisions related to alterations of these Terms apply in the same way. The User may not assign or transfer their rights or obligations under these Terms in any manner without the Owner's written permission.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Contacts</h3>
                                    <p className="text-gray-600 mb-4">
                                        All communications regarding the usage of this Application must be sent using the contact information provided in this document.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability - US Users</h2>
                                    <p className="text-gray-600 mb-4">
                                        If any provision within these Terms is determined to be invalid or unenforceable, it will be reinterpreted, construed, and modified to the extent required to make it valid, enforceable, and consistent with its original intent. These Terms represent the entire agreement between Users and the Owner regarding this matter, and all previous agreements or communications between the parties on this matter are replaced by these Terms. These Terms will be fully enforced in accordance with the law.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                                    <p className="text-gray-600 mb-4">
                                        The laws of the jurisdiction where the Owner is located, as stated in this document, shall govern these Terms, without considering any conflict of laws rules.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Venue of Jurisdiction</h2>
                                    <p className="text-gray-600 mb-4">
                                        The courts of the place where the Owner is established (as shown in this document), hold the sole authority over any dispute arising from or related to these Terms.
                                    </p>
                                </section>

                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                                    <p className="text-gray-600 mb-4">
                                        If you have questions or concerns about this document, please contact us at:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-600">
                                            <strong>Email:</strong> info@wanttosellhomeforcash.com
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
