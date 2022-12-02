import React from "react";
import "./index.css";
import { Modal } from "./Modal";
import { useLogic } from "./useLogic";

export const Pagination = () => {
    const {
        isLoading,
        isError,
        error,
        page,

        split,
        style,
        currentPage,
        setCurrentPage,
    } = useLogic();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error! {error.message}</div>;
    return (
        <div>
            <div className="container">
                {page.map((d) => (
                    <div
                        className=""
                        key={d.id}
                        style={{ marginBottom: "20px" }}
                    >
                        <div className="">{d.id}</div>
                        <div className="">{d.title}</div>
                        <div className="">{d.body}</div>
                    </div>
                ))}
                {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eius sunt repudiandae a esse maxime nostrum omnis ipsam
                    voluptas rerum, nulla pariatur officia impedit iure odio
                    ratione rem error dolorem accusamus est optio saepe vitae
                    amet. Aperiam amet quasi praesentium porro inventore
                    doloremque dolor dolore cum voluptate atque ad quo, iste
                    rerum ullam molestias saepe vel? Praesentium nesciunt
                    facilis obcaecati fugit ullam accusantium id consequuntur
                    excepturi officiis modi sint a saepe ea voluptatum,
                    veritatis placeat animi, vitae commodi accusamus magnam
                    corrupti eius! Dolore quas provident repellat quasi officia
                    eligendi iusto maiores aliquam doloremque saepe quidem,
                    necessitatibus non fugiat porro inventore fuga tempore ut
                    harum cum tenetur. Consectetur, consequuntur nihil?
                    Provident quod voluptate suscipit reprehenderit quia porro,
                    iure deserunt ea? Aliquam accusamus odio perspiciatis
                    eligendi sequi itaque facilis unde mollitia ipsam eum aut id
                    laboriosam corrupti architecto quisquam, nemo repellat
                    provident velit vitae. Distinctio accusamus quam fugit
                    placeat accusantium sit voluptatum eligendi, quibusdam at
                    perferendis fuga quisquam eaque deleniti dignissimos dolore,
                    assumenda quasi architecto sed quis officia inventore maxime
                    iure ducimus in. Aut, quos sint eveniet, architecto laborum
                    tenetur ex ullam ea deleniti ut totam facilis quis voluptate
                    eius sequi velit qui enim fugiat placeat praesentium vero?
                    Fuga accusantium ea perspiciatis laudantium ipsam velit
                    dolor non, eum obcaecati maiores adipisci ullam eveniet
                    architecto fugit veritatis atque enim necessitatibus impedit
                    magni dolorem, suscipit, eligendi itaque facilis. Accusamus
                    omnis asperiores, neque esse, soluta voluptates itaque
                    impedit voluptatem veniam laboriosam amet. Hic delectus at
                    autem nihil sapiente! Error mollitia rerum nobis minus omnis
                    eligendi possimus molestias, voluptas eius explicabo tenetur
                    at quia distinctio similique consequuntur laudantium
                    repellendus illo tempora. Optio aperiam laborum eligendi
                    nihil ratione sit rerum nisi consectetur reiciendis saepe,
                    alias deserunt, at architecto beatae iusto perspiciatis ab
                    cupiditate soluta ipsa aliquam commodi adipisci eius
                    doloribus non. Ipsum quibusdam, nobis, error, amet ut minima
                    perferendis officiis eaque hic iste nihil possimus
                    consequuntur dolorum dolore necessitatibus cupiditate
                    doloremque corporis ducimus ad! Eum ducimus ab aliquam, vel
                    doloribus eos quae accusamus laborum atque a, pariatur
                    dolorum minima reprehenderit vero aperiam totam! Amet esse
                    aut velit vero fugit? Hic vitae cum architecto pariatur nisi
                    ipsa possimus exercitationem cumque perspiciatis voluptate
                    ut id voluptatem officiis deserunt tenetur repudiandae, et
                    ex nobis recusandae cupiditate, nostrum non fugiat
                    aspernatur. Magni deserunt illum molestiae esse accusantium,
                    minima nihil aliquid excepturi natus explicabo eius ex ad
                    eveniet pariatur et beatae neque molestias recusandae eum
                    dicta totam laudantium fuga ab impedit? Distinctio corrupti
                    laudantium eaque ad rerum, sed natus iure architecto,
                    officiis esse eos quidem accusantium ratione! Iure nisi cum
                    minus perferendis excepturi ipsa ipsum cupiditate voluptatum
                    sapiente. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Architecto eaque dignissimos qui ipsam
                    quaerat consequuntur voluptatem quam autem voluptas dolorem,
                    nemo non consequatur debitis ex, natus rerum, totam
                    perferendis tenetur. Explicabo enim odio voluptatem sapiente
                    ad impedit et, alias ipsa quam neque modi, consequuntur quae
                    non sunt. Vel nulla eligendi tempore dolorum laboriosam,
                    autem alias consequuntur sunt hic quasi incidunt, enim fuga,
                    corporis vero exercitationem iure explicabo eum non aperiam
                    aliquid quaerat? Nisi quia quos facilis earum quaerat
                    exercitationem iusto quas vitae minus totam, in explicabo
                    praesentium vero quis suscipit quibusdam fugit laborum
                    inventore, quidem dolor? Illo accusamus nam omnis,
                    consequatur voluptates sequi ea, at harum quas, dolorem
                    soluta laboriosam. Quae, exercitationem. Culpa ratione
                    expedita labore dolores facere quasi deleniti temporibus
                    accusamus dolorem omnis a assumenda, molestias ut doloribus
                    ducimus sequi odio enim nemo facilis sed. Tempore voluptatem
                    autem, placeat iste ea eos quibusdam non inventore iusto.
                    Suscipit perspiciatis praesentium illum vero eius in atque,
                    labore, ea inventore velit et. Pariatur minima cum ipsam
                    vitae totam possimus esse harum exercitationem facere, ullam
                    necessitatibus eveniet excepturi ducimus ab deleniti aliquam
                    consectetur. Quam adipisci illo laudantium provident hic
                    aliquam minima ea assumenda natus necessitatibus nam, esse
                    veniam. Itaque ab reprehenderit soluta reiciendis, harum
                    provident perferendis, architecto odit dolorum nisi
                    recusandae! Dolor, ab asperiores! Aliquam officiis cumque
                    veritatis possimus eum saepe exercitationem odio repudiandae
                    dolores incidunt inventore ea dicta quidem, nostrum eius
                    culpa dolorum ratione pariatur hic commodi velit, quibusdam
                    repellat. Illum dolorem animi temporibus. Ratione officia
                    beatae aliquid quas sequi! Eaque, reprehenderit et iste
                    impedit dignissimos, illum, dolor ex excepturi unde error
                    aperiam esse. At sapiente et debitis minus exercitationem
                    eligendi ab, amet accusamus sunt nesciunt? Dicta laudantium
                    quidem aliquam culpa expedita cum sequi! Ad consequatur,
                    incidunt accusantium debitis consectetur atque cum vitae
                    mollitia dicta quo repudiandae illum nam nihil cumque non
                    corporis rem, molestiae sed. Quos doloremque quas esse
                    quaerat, veritatis sequi omnis a at minus non eius
                    perspiciatis corrupti perferendis aspernatur nemo recusandae
                    amet molestias eum fuga atque magnam, quibusdam voluptate!
                    Quibusdam alias ut adipisci eos ex eveniet qui maiores
                    quasi! Voluptatem veritatis aliquid a cum accusantium
                    repellat minus vero. Esse dolorum impedit delectus eveniet
                    harum quibusdam tempore et, voluptatibus libero error,
                    mollitia rerum vitae officia enim. Expedita sit sequi
                    perspiciatis cumque maxime distinctio aliquam nam maiores
                    optio aliquid a sapiente neque exercitationem rem numquam
                    est, perferendis nesciunt pariatur eos. Voluptate eius
                    recusandae voluptatibus facere officia autem soluta nulla
                    cupiditate. Quibusdam quas eaque, tenetur minima incidunt
                    id! Laboriosam obcaecati numquam tenetur! Molestias
                    laudantium praesentium velit suscipit distinctio hic
                    sapiente quod sequi veritatis. Nesciunt, fugit enim!
                </p>*/}
                <ul className="apiContents">
                    {page.length > 0 &&
                        [...new Array(split)].map((li, idx) => (
                            <li
                                style={style(idx + 1)}
                                key={idx}
                                onClick={() =>
                                    idx + 1 !== currentPage &&
                                    setCurrentPage(idx + 1)
                                }
                            >
                                {idx + 1}
                            </li>
                        ))}
                </ul>
            </div>
            <Modal>
                <div className="modalContent">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem dolores suscipit, laudantium distinctio cum autem,
                    ipsam, odio magnam optio harum est odit cupiditate dolorem
                    dolorum.
                </div>
            </Modal>
            <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis possimus inventore ipsa veniam sapiente laudantium,
                incidunt pariatur commodi voluptatum deleniti saepe sint
                doloribus fugiat vero? Laboriosam inventore veniam enim natus
                quam modi itaque soluta eius eaque in quaerat nam voluptas,
                culpa illo iusto at quasi. Corrupti laborum, adipisci hic
                doloremque nesciunt omnis ullam. Qui, temporibus odio tempore
                eum dolorem quasi alias pariatur totam voluptas atque
                praesentium consectetur exercitationem nulla optio hic dicta nam
                repellendus ad! Quia ipsa porro et distinctio delectus, eaque
                voluptatibus, atque vel autem repudiandae minima assumenda iste,
                libero molestiae praesentium sequi pariatur culpa saepe eveniet
                qui obcaecati?
            </div>
        </div>
    );
};
