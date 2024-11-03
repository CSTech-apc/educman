"use client"

import InputBasic from "@/components/ui/input/InputBasic";
import BtnIsOpenModal from "@/components/ui/button/BtnIsOpenModal";
import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import BtnBasic from "@/components/ui/button/BtnBasic";
import { IoBanOutline, IoCheckmark, IoChevronBack, IoWarningOutline } from "react-icons/io5";
import { api } from "@/services/apiClient";
import moment from "moment";
import { IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { ListPeriodsModel } from "../model/periodModel";
import Pagination from "@/components/pagination/Pagination";
import { AiOutlineDelete } from "react-icons/ai";
import { TbDatabaseEdit } from "react-icons/tb";

export default function List({ listPeriods }: ListPeriodsModel) {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const [year, setYear] = useState<string>("")
  const [isDuplicate, setDuplicate] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [isConfirm, setIsConfirm] = useState<boolean>(true)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const [list, setList] = useState(listPeriods || [])

  const [skip, setSkip] = useState<number>(0)
  const [take, setTake] = useState<number>(8)
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const [pk, setPk] = useState<string>("")
  const [getYear, setGetYear] = useState<string>("")
  const [getYearAdd, setGetYearAdd] = useState<string>("")

  const [actionControl, setActionControl] = useState<string>("")

  async function periodListFct() {
    const response = await api.get("/periods", {
      params: {
        skip: skip,
        take: take,
      }
    })

    setList(response.data.periods)
    setTotalRecords(response.data.total)
    setTotalPages(response.data.totalPage)
  }

  async function periodFilterFct() {
    if (year.length >= 4) {
      const dateFormat = "-01-01T00:00:00:000Z"
      const response = await api.get("/periods/filter", {
        params: {
          year: year + dateFormat
        }
      })

      setList(response.data)
    } else {
      periodListFct()
      setSkip(0)
      setCurrentPage(1)
    }
  }

  useEffect(() => {
    periodListFct()
  }, [listPeriods, skip])

  function nextPage() {
    if (currentPage < totalPages) {
      setSkip(skip + 8)
      setCurrentPage(Math.ceil(currentPage + 1))
    }
  }

  function previousPage() {
    if (currentPage > 1) {
      setSkip(skip - 8)
      setCurrentPage(Math.ceil(currentPage - 1))
    }
  }
  function isOpenModalShow() {
    setPk("")
    setIsOpenModal(true)
  }

  async function verifyHandler() {
    let yearFormat = ""
    if (year.length >= 4 || getYear.length >= 4) {

      if (pk.length <= 0) {
        yearFormat = moment(year).format("YYYY-MM-DD")
      } else {
        yearFormat = moment(getYear).format("YYYY-MM-DD")
      };

      const dateFormat = "T00:00:00.000Z";
      const response = await api.get("/periods/check", {
        params: {
          year: yearFormat + dateFormat
        }
      })

      let checkYear = response.data

      if (checkYear) {
        setDuplicate(true)
        setMessage("Registro ja consta no sistema!")
      } else {
        setDuplicate(false)
        setMessage("Ok! Para continuar clique ao lado.")
      }
    } else {
      setMessage("")
    }
  }

  function confirmAdd() {
    setIsConfirm(false)
    setActionControl("update")
  }

  async function addRegister() {
    if (pk.length <= 0) {
      const yearFormat = moment(year).format("YYYY-MM-DD");
      const dateFormat = "T00:00:00.000Z";
      const response = await api.post("/periods", {
        year: year + yearFormat + dateFormat,
      })
      console.log("addRegister")
    } else {
      editRecord()
      console.log("editRecord")
    }

    setIsSuccess(true)
    periodListFct()
  }

  function clearFields() {
    setPk("")
    setGetYear("")
    setGetYearAdd("")
    setYear("")
    setMessage("")
    setIsOpenModal(!isOpenModal)
    setIsConfirm(true)
    setIsSuccess(false)
  }

  function confirmDelete() {
    setIsConfirm(false)
    setActionControl("delete")
  }

  function backVerify() {
    setGetYear("")
    // setGetYearAdd("")
    setYear("")
    setMessage("")
    setIsConfirm(true)
    setIsSuccess(false)
  }

  {/* edite record */ }
  async function editRecord() {
    const yearFormat = moment(getYear).format("YYYY-MM-DD");
    await api.put("/periods", {
      pkPer: pk,
      year: yearFormat
    })
  }

  {/* delete record */ }
  async function deleteRecord(pkPer: string) {
    await api.delete("/periods", {
      params: {
        pkPer: pkPer
      }
    })

    setIsSuccess(true)
    setIsConfirm(true)
    periodListFct()
  }

  function getPk(pk: string) {
    setPk(pk)
    getDataRecord(pk)
  }

  async function getDataRecord(pkPer: string) {
    setIsOpenModal(true)
    const response = await api.get("/periods/filter/pkper", {
      params: {
        pkPer: pkPer
      }
    })

    setGetYearAdd(moment(response.data.year).add(1, "year").format("YYYY"))
  }

  return (
    <>
      <div className={`${isOpenModal &&
        "w-full flex flex-col h-full bg-slate-600 items-center justify-center bg-opacity-80 absolute right-0 top-0"}
        duration-500 z-10`}>

        {isOpenModal &&
          <div className="w-[auto] h-[12rem] bg-white border-dashed border-[1px] border-green-500 rounded-md shadow p-5
          flex flex-row items-start">

            <div className="h-auto">
              <div className="h-auto flex flex-row text-[18px] items-center">
                <span className="text-slate-700">Periodo</span>
                <IoIosArrowForward className="text-green-400" size={20} />
                <div className="text-slate-400 flex flex-row">
                  {pk.length > 0 ?
                    <div className="flex flex-row gap-2">
                      "Editar/excluir registro:
                      <span className="text-slate-600">{getYearAdd}</span>
                    </div> :
                    <p>Adicionar novo registro:</p>
                  }
                </div>
              </div>

              {isConfirm && !isSuccess ?
                <div className="relative">
                  <InputBasic
                    title="1. Verificar duplicidade."
                    border="border-[1px] border-slate-400 "
                    widthdiv="w-[28rem]"
                    widthinput="w-[10rem]"
                    placeholder="Ano/periodo - aaaa"

                    icon={pk.length <= 0 ?
                      year.length >= 4 ? !isDuplicate ? <IoCheckmark onClick={confirmAdd} /> : <IoWarningOutline /> : null
                      :
                      getYear.length >= 4 ? !isDuplicate ? <IoCheckmark onClick={confirmAdd} /> : <IoWarningOutline /> : null
                    }

                    value={pk.length <= 0 ?
                      year :
                      getYear
                    }

                    onChange={pk.length <= 0 ? (e) => setYear(e.target.value) : (e) => setGetYear(e.target.value)}

                    onKeyUp={verifyHandler}
                    bgcolor={year.length >= 4 || getYear.length >= 4 ? !isDuplicate ? "bg-green-500" : "bg-red-500" : ""}
                    icocolor="text-white"
                    message={message}
                    colormessage={!isDuplicate ? "text-green-700" : "text-red-500"}
                    hovercolor={!isDuplicate ? "hover:bg-green-400 hover:cursor-pointer" : ""}
                  />
                  {pk.length > 0 &&
                    <button className="absolute -top-8 right-0 shadow p-1 rounded-[3px]
                    text-[14px] w-[6.8rem] flex justify-center" onClick={confirmDelete}>
                      Excluir registro!
                    </button>
                  }
                </div>
                :
                !isSuccess ?
                  <InputBasic
                    title="2. Deseja alterar a base de dados do sistema?"
                    border="border-[0px]"
                    widthdiv="w-[28rem]"
                    widthinput="w-[10rem]"

                    value={pk.length <= 0 ?
                      year :
                      getYear
                    }

                    onChange={pk.length <= 0 ? (e) => setYear(e.target.value) : (e) => setGetYear(e.target.value)}

                    labelYear="Ano/periodo:"
                    readOnly={true}
                    onSubmit={addRegister}
                  />
                  :
                  <InputBasic
                    title="3. Transacao realizada com sucesso!"
                    border="border-[0px]"
                    widthdiv="w-[28rem]"
                    widthinput="w-[10rem]"

                    value={pk.length <= 0 ?
                      year :
                      getYear
                    }

                    onChange={pk.length <= 0 ? (e) => setYear(e.target.value) : (e) => setGetYear(e.target.value)}

                    labelYear="Ano/periodo:"
                    readOnly={true}
                    onSubmit={addRegister}
                  />
              }

              <div className="flex w-full justify-end gap-2">
                {/* {pk.length > 0 && !isConfirm && !isSuccess && */}
                {/*   <> */}
                {/*     {actionControl === "delete" && */}
                {/*       <div className=""> */}
                {/*         <BtnBasic */}
                {/*           bgcolor="bg-orange-500" */}
                {/*           bghover="hover:bg-orange-400" */}
                {/*           icon={<AiOutlineDelete size={20} onClick={() => deleteRecord(pk)} />} */}
                {/*         /> */}
                {/*       </div> */}
                {/*     } */}
                {/*   </> */}
                {/* } */}
                {!isConfirm &&
                  !isSuccess &&
                  <>
                    {pk.length <= 0 || !isConfirm ?
                      <>
                        <div className="w-full flex flex-row justify-start">
                          <BtnBasic
                            bgcolor="bg-green-500"
                            bghover="hover:bg-green-400"
                            icon={<IoChevronBack size={20} onClick={backVerify} />}
                          />
                        </div>
                        {actionControl === "delete" ? null :
                          <div className="">
                            <BtnBasic
                              bgcolor="bg-green-500"
                              bghover="hover:bg-green-400"
                              icon={<TbDatabaseEdit size={20} onClick={addRegister} />}
                            />
                          </div>
                        }
                      </>
                      :
                      <div className="">
                        <BtnBasic
                          bgcolor="bg-green-500"
                          bghover="hover:bg-green-400"
                          icon={<TbDatabaseEdit size={20} onClick={addRegister} />}
                        />
                      </div>
                    }
                  </>
                }
                <>
                  {pk.length > 0 && !isConfirm && !isSuccess &&
                    <>
                      {actionControl === "delete" &&
                        <div className="">
                          <BtnBasic
                            bgcolor="bg-orange-500"
                            bghover="hover:bg-orange-400"
                            icon={<AiOutlineDelete size={20} onClick={() => deleteRecord(pk)} />}
                          />
                        </div>
                      }
                    </>
                  }
                </>
                <div className="">
                  <BtnBasic
                    bgcolor={!isSuccess ? "bg-red-500" : "bg-green-500"}
                    bghover={!isSuccess ? "hover:bg-red-400" : "hover:bg-green-400"}
                    icon={!isSuccess ? <IoBanOutline size={20} /> : <IoCheckmark />}
                    isOpenModal={clearFields} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <ul className="w-auto h-auto flex flex-wrap p-3 gap-2 m-4 relative pt-10">

        <InputBasic
          // title="Filtrar registros:"
          bgcolor="bg-slate-100"
          widthdiv="w-[28rem]"
          border="border-[1px] border-slate-300"
          widthinput="w-[10rem]"
          icon={<IoIosSearch size={18} />}
          onKeyUp={periodFilterFct}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Pesquise seus registros."
          absolute="absolute"
          top="-top-8"
          right="right-0"
        />

        <BtnIsOpenModal isOpenModal={isOpenModalShow} width="w-40" hight="28" />
        {
          list.map((item) => (
            <li key={item.pkPer} className="w-40 h-28 bg-white rounded-md shadow p-3
              flex flex-col hover:bg-green-100 hover:cursor-pointer" onClick={() => getPk(item.pkPer)}>
              <div className="bg-slate-100 text-slate-800 w-[1.8rem] h-[1.8rem] flex shadow
                items-center justify-center rounded-full">
                <FaRegCalendar size={18} />
              </div>
              <span className="w-full flex justify-center text-2xl">{moment(item.year).add(1, "year").format("YYYY")}</span>
              <span className="w-full flex justify-center text-[12px] -mt-1">Ano/periodo</span>
            </li>
          ))
        }

        <Pagination
          width="w-[20.6rem]"
          height="h-28"
          totalRecords={totalRecords}
          totalPages={totalPages}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage} />

      </ul>
    </>
  )
}
