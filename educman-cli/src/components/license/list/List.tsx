'use client'
import React from 'react'

import InputBasic from '@/components/ui/input/InputBasic'
import BtnIsOpenModal from '@/components/ui/button/BtnIsOpenModal'
import { useEffect, useState } from 'react'
import BtnBasic from '@/components/ui/button/BtnBasic'
import {
  IoBanOutline,
  IoCheckmark,
  IoChevronBack,
  IoWarningOutline
} from 'react-icons/io5'
import { api } from '@/services/apiClient'
import moment from 'moment'
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from 'react-icons/io'
import { ListLicensesModel } from '../model/licenseModel'

import { AiOutlineDelete } from 'react-icons/ai'
import { TbDatabaseEdit } from 'react-icons/tb'
import Pagination from '@/components/pagination/Pagination'
import { LiaCertificateSolid } from 'react-icons/lia'
import { ListPeriodsModel } from '@/components/period/model/periodModel'

export default function List(
  { listLicenses }: ListLicensesModel,
  { listPeriods }: ListPeriodsModel
) {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const [year, setYear] = useState<string>('')
  const [isDuplicate, setDuplicate] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [isConfirm, setIsConfirm] = useState<boolean>(true)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const [list, setList] = useState(listLicenses || [])
  const [listPer, setListPer] = useState(listPeriods || [])

  {/* PERIODO PAGINATION FILTER */ }
  const [skipPerFilter, setSkipPerFilter] = useState<number>(0)
  const [takePerFilter, setTakePerFilter] = useState<number>(5)

  {/* LICENSE PAGINATION FILTER */ }
  const [skipLic, setSkipLic] = useState<number>(0)
  const [takeLic, setTakeLic] = useState<number>(5)

  const [totalRecordsLic, setTotalRecordsLic] = useState<number>(0)
  const [totalPagesLic, setTotalPagesLic] = useState<number>(0)
  const [currentPageLic, setCurrentPageLic] = useState<number>(1)

  const [totalRecordsFilter, setTotalRecordsFilter] = useState<number>(0)
  const [totalPagesFilter, setTotalPagesFilter] = useState<number>(0)
  const [currentPageFilter, setCurrentPageFilter] = useState<number>(1)

  const [getYear, setGetYear] = useState<string>('')
  const [getYearAdd, setGetYearAdd] = useState<string>('')

  const [actionControl, setActionControl] = useState<string>('')

  {/* STATUS LIST FILTER */ }
  const listStatus = [
    { id: 1, status: 'ACT' },
    { id: 2, status: 'EXP' },
    { id: 3, status: 'SUS' },
  ]

  {/* LICENSES */ }
  const [isOpenPer, setIsOpenPer] = useState<boolean>(true)

  const [pkLic, setPkLic] = useState<string>('')
  const [university, setUniversity] = useState<string>('')
  const [nrle, setNrle] = useState<string>('')
  const [nisr, setNisr] = useState<string>('')
  const [initDate, setInitDate] = useState<string>('')
  const [finDate, setFinDate] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const [fkPerFilter, setFkPerFilter] = useState<string>('')

  async function licenseList() {
    if (fkPerFilter.length === 0) {
      const response = await api.get('/licenses', {
        params: {
          skip: skipLic,
          take: takeLic
        }
      })

      setList(response.data.licenses)
      setTotalRecordsLic(response.data.total)
      setTotalPagesLic(response.data.totalPage)
    }
  }

  async function licenseListFkPer(fkPerFilter: string) {

    if (fkPerFilter.length > 0) {
      const response = await api.get('/licenses/fkper', {
        params: {
          skip: skipLic,
          take: takeLic,
          fkper: fkPerFilter,
        }
      })

      setList(response.data.licenses)
      setTotalRecordsLic(response.data.total)
      setTotalPagesLic(response.data.totalPage)
    }
  }

  async function licenseListFkPerStatus(fkPerFilter: string, status: string) {

    if (fkPerFilter.length > 0 && status.length > 0) {
      const response = await api.get('/licenses/fkper-status', {
        params: {
          skip: skipLic,
          take: takeLic,
          fkper: fkPerFilter,
          status: status,
        }
      })

      setList(response.data.licenses)
      setTotalRecordsLic(response.data.total)
      setTotalPagesLic(response.data.totalPage)
    }
  }

  async function licenseListFkPerStatusUniversity(fkPerFilter: string, status: string, university: string) {

    if (fkPerFilter.length > 0 && status.length > 0 && university.length > 0) {
      const response = await api.get('/licenses/fkper-status-university', {
        params: {
          skip: skipLic,
          take: takeLic,
          fkper: fkPerFilter,
          status: status,
          university: university,
        }
      })

      setList(response.data.licenses)
      setTotalRecordsLic(response.data.total)
      setTotalPagesLic(response.data.totalPage)
    } else {
      licenseListFkPerStatus(fkPerFilter, status)
    }

  }

  async function periodListFilter() {
    const response = await api.get('/periods', {
      params: {
        skip: skipPerFilter,
        take: takePerFilter
      }
    })

    setListPer(response.data.periods)
    setTotalRecordsFilter(response.data.total)
    setTotalPagesFilter(response.data.totalPage)
  }

  async function periodFilterFct() {
    if (year.length >= 4) {
      const dateFormat = '-01-01T00:00:00:000Z'
      const response = await api.get('/periods/filter', {
        params: {
          year: year + dateFormat
        }
      })

      setList(response.data)
    } else {
      periodListFilter()
      setSkipPerFilter(0)
      setCurrentPageLic(1)
    }
  }

  useEffect(() => {
    periodListFilter()
    licenseList()
  }, [listLicenses, listPeriods, skipLic, skipPerFilter, fkPerFilter, status, university])

  function nextPageLic() {
    if (currentPageLic < totalPagesLic) {
      setSkipLic(skipLic + 5)
      setCurrentPageLic(currentPageLic + 1)
    }
  }

  function previousPageLic() {
    if (currentPageLic > 1) {
      setSkipLic(skipLic - 5)
      setCurrentPageLic(currentPageLic - 1)
    }
  }

  function nextPagePer() {
    if (currentPageFilter < totalPagesFilter) {
      setSkipPerFilter(skipPerFilter + 5)
      setCurrentPageFilter(currentPageFilter + 1)
    }
  }

  function previousPagePer() {
    if (currentPageFilter > 1) {
      setSkipPerFilter(skipPerFilter - 5)
      setCurrentPageFilter(currentPageFilter - 1)
    }
  }
  function isOpenModalShow() {
    setFkPerFilter('')
    setPkLic('')
    setIsOpenModal(true)
  }

  async function verifyHandler() {
    if (nrle.length >= 14) {
      const response = await api.get('/licenses/check', {
        params: {
          fkPer: fkPerFilter,
          nrle: nrle
        }
      })

      const checkYear = response.data

      if (checkYear) {
        setDuplicate(true)
        setMessage('Registro ja consta no sistema!')
      } else {
        setDuplicate(false)
        setMessage('Ok! Para continuar clique ao lado.')
      }
    } else {
      setMessage('')
    }
  }

  function confirmAdd() {
    setActionControl('add')
    // setIsConfirm(true)
    // setIsSuccess(false)
    // setActionControl("update")
  }

  async function addRegister() {
    if (fkPerFilter.length <= 0) {
      const yearFormat = moment(year).format('YYYY-MM-DD')
      const dateFormat = 'T00:00:00.000Z'
      const response = await api.post('/periods', {
        year: year + yearFormat + dateFormat
      })
      console.log('addRegister')
    } else {
      editRecord()
      console.log('editRecord')
    }

    setIsSuccess(true)
    periodListFilter()
  }

  function clearFields() {
    // setIsOpenPer(true)
    // setFkPer('')
    // setPkLic('')
    // setGetYear('')
    // setGetYearAdd('')
    // setYear('')
    // setMessage('')
    // setIsOpenModal(!isOpenModal)
    // setIsConfirm(true)
    // setIsSuccess(false)
  }

  function confirmDelete() {
    // setIsConfirm(false)
    // setActionControl('delete')
  }

  function backVerify() {
    // setIsOpenPer(true)
    // setGetYear('')
    // // setGetYearAdd("")
    // setYear('')
    // setMessage('')
    // setIsConfirm(true)
    // setIsSuccess(false)
  }

  {
    /* edite record */
  }
  async function editRecord() {
    const yearFormat = moment(getYear).format('YYYY-MM-DD')
    await api.put('/periods', {
      pkPer: fkPerFilter,
      year: yearFormat
    })
  }

  {
    /* delete record */
  }
  async function deleteRecord(pkPer: string) {
    await api.delete('/periods', {
      params: {
        pkPer: pkPer
      }
    })

    setIsSuccess(true)
    setIsConfirm(true)
    periodListFilter()
  }

  function getPkPerFilter(pk: string) {
    setStatus("")
    setFkPerFilter(pk)
    licenseListFkPer(pk)
  }

  function getPkLic(pk: string) {
    setPkLic(pk)
    getDataRecordLic(pk)
  }

  async function getDataRecordPer(pkPer: string) {
    setIsOpenModal(true)
    const response = await api.get('/periods/filter/pkper', {
      params: {
        pkPer: pkPer
      }
    })

    setGetYearAdd(moment(response.data.year).add(1, 'year').format('YYYY'))
  }

  async function getDataRecordLic(pkLic: string) {
    setIsOpenModal(true)
    const response = await api.get('/periods/filter/pklic', {
      params: {
        pkLic: pkLic
      }
    })

    setGetYearAdd(response.data.university)
  }

  function getStatus(id: number, status: string) {
    setStatus(status)
    licenseListFkPerStatus(fkPerFilter, status)
  }

  return (
    <>
      {/* START FILTER */}
      <div className='flex items-center justify-start w-auto pl-3 h-auto gap-0 flex-wrap bg-slate-50 shadow-md m-4 p-2 rounded-md'>

        <span className='flex text-[16px] gap-2 text-slate-700'>Filtros de pesquisa</span>
        {/* START PERIOD LIST FILTER */}
        <div className="flex gap-2 p-2 items-center">
          <span className='flex text-[14px] gap-2 text-slate-700'>Periodo<p className='w-[1px] h-[20px] bg-slate-700'></p></span>
          <IoIosArrowBack
            onClick={previousPagePer}
            className="bg-slate-900 text-white rounded-full
              w-6 h-6 p-[4px] hover:bg-slate-800 hover:cursor-pointer"
          />
          {listPer.map((item) => (
            <li
              key={item.pkPer}
              className={`flex flex-row bg-slate-200 ${item.pkPer === fkPerFilter && "border-[2px] border-green-500"} rounded-md
                        justify-center items-center h-[1.3rem] w-[3.5rem] hover:bg-slate-100 hover:cursor-pointer`}
              onClick={() => getPkPerFilter(item.pkPer)}
            >
              <span className="text-[14px]">
                {moment(item.year).add(1, 'year').format('YYYY')}
              </span>
            </li>
          ))}
          <IoIosArrowForward
            onClick={nextPagePer}
            className="bg-slate-900 text-white rounded-full
              w-6 h-6 p-[4px] hover:bg-slate-800 hover:cursor-pointer"
          />
        </div>
        {/* FINAL PERIOD LIST FILTER */}

        {/* START STATUS LIST FILTER */}
        <div className="flex gap-2 p-2 items-center">
          <span className='flex text-[14px] gap-2 text-slate-700'>Status<p className='w-[1px] h-[20px] bg-slate-700'></p></span>
          {listStatus.map((item) => (
            <li
              key={item.id}
              className={`flex flex-row bg-slate-200 rounded-md ${item.status === status && "border-[2px] border-green-500"}
                        justify-center items-center h-[1.3rem] w-[3.5rem] hover:bg-slate-100 hover:cursor-pointer`}
              onClick={() => getStatus(item.id, item.status)}
            >
              <span className="text-[13px]">
                {item.status}
              </span>
            </li>
          ))}
        </div>

        {/* START UNIVERSITY LIST FILTER */}
        <div className='flex ml-2 gap-2 items-center'>
          <span className='flex text-[14px] gap-2 text-slate-700'>Universidade<p className='w-[1px] h-[20px] bg-slate-700'></p></span>
          <InputBasic
            bgcolor="bg-slate-100"
            widthdiv="w-[28rem]"
            border="border-[1px] border-slate-400"
            widthinput="w-[10rem]"
            icon={<IoIosSearch size={18} />}
            onKeyUp={() => licenseListFkPerStatusUniversity(fkPerFilter, status, university)}
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="Pesquise seus registros"
          />
        </div>
        {/* FINAL UNIVERSITY LIST FILTER */}

      </div>
      {/* FINAL FILTER */}






      {/* START MODAL */}
      <div
        className={`${isOpenModal &&
          'w-full flex flex-col h-full bg-slate-600 items-center justify-center bg-opacity-80 absolute right-0 top-0'
          }
        duration-500 z-10`}
      >
        {isOpenModal && (
          <div
            className="w-[40rem] h-[32rem] bg-white border-dashed border-[1px] border-green-500 rounded-md shadow p-5
          flex flex-row items-start"
          >
            <div className="h-auto">
              <div className="h-full flex w-full flex-row text-[18px] items-center">
                <span className="text-slate-700">Licenca</span>
                <IoIosArrowForward className="text-green-400" size={20} />
                <div className="text-slate-400 flex flex-row w-full items-center justify-between">
                  {fkPerFilter && pkLic ? (
                    <div className="flex flex-row gap-2 w-full">
                      "Editar/excluir registro:
                      <span className="text-slate-600">{getYearAdd}</span>
                    </div>
                  ) : (
                    <p>Adicionar novo registro:</p>
                  )}
                  {fkPerFilter && (
                    <div className="flex flex-row gap-2">
                      <p className="text-[14px] text-slate-700">
                        Periodo selecionado:
                      </p>
                      <span className="text-slate-600 flex items-center text-[14px] font-semibold">
                        {getYearAdd}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {isOpenPer && (
                <div className="pt-[8px] pl-[12px]">
                  <div className="">
                    <span className="text-slate-500">
                      1. Selecione um periodo:
                    </span>
                  </div>
                  <div className="flex gap-3 p-2 items-center">
                    <IoIosArrowBack
                      onClick={previousPageLic}
                      className="bg-slate-900 text-white rounded-full
              w-6 h-6 p-[4px] hover:bg-slate-800 hover:cursor-pointer"
                    />
                    {listPer.map((item) => (
                      <li
                        key={item.pkPer}
                        className="flex flex-row bg-slate-200 rounded-md
                        justify-center items-center h-[1.3rem] w-[3.5rem] hover:bg-slate-100 hover:cursor-pointer"
                        onClick={() => getPkPerFilter(item.pkPer)}
                      >
                        <span className="text-[15px]">
                          {moment(item.year).add(1, 'year').format('YYYY')}
                        </span>
                      </li>
                    ))}
                    <IoIosArrowForward
                      onClick={nextPageLic}
                      className="bg-slate-900 text-white rounded-full
              w-6 h-6 p-[4px] hover:bg-slate-800 hover:cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {!isConfirm && !isSuccess && fkPerFilter ? (
                <div className="relative">
                  {actionControl === 'add' ? (
                    <>
                      <div className="flex flex-row gap-2 absolute -top-2 right-0">
                        <p className="text-[14px] text-slate-700">Cnpj:</p>
                        <span className="text-slate-600 flex items-center text-[14px] font-semibold">
                          {nrle}
                        </span>
                      </div>
                      <InputBasic
                        title="2. Preencha os campos para prosseguir:"
                        border="border-[1px] border-slate-400 "
                        widthdiv="w-[28rem]"
                        widthinput="w-[10rem]"
                        placeholder="Instituicao de ensino"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                      />
                      <InputBasic
                        border="border-[1px] border-slate-400 "
                        widthdiv="w-[28rem]"
                        widthinput="w-[10rem]"
                        placeholder="Instituicao de ensino"
                        value={nisr}
                        onChange={(e) => setNisr(e.target.value)}
                      />
                      <InputBasic
                        border="border-[1px] border-slate-400 "
                        widthdiv="w-[28rem]"
                        widthinput="w-[10rem]"
                        placeholder="Instituicao de ensino"
                        value={initDate}
                        onChange={(e) => setInitDate(e.target.value)}
                      />
                      <InputBasic
                        border="border-[1px] border-slate-400 "
                        widthdiv="w-[28rem]"
                        widthinput="w-[10rem]"
                        placeholder="Instituicao de ensino"
                        value={finDate}
                        onChange={(e) => setFinDate(e.target.value)}
                      />
                    </>
                  ) : (
                    <InputBasic
                      title="1. Verificar duplicidade."
                      border="border-[1px] border-slate-400 "
                      widthdiv="w-[28rem]"
                      widthinput="w-[10rem]"
                      placeholder="Ano/periodo - aaaa"
                      icon={
                        pkLic.length <= 0 ? (
                          nrle.length >= 14 ? (
                            !isDuplicate ? (
                              <IoCheckmark onClick={confirmAdd} />
                            ) : (
                              <IoWarningOutline />
                            )
                          ) : null
                        ) : getYear.length >= 14 ? (
                          !isDuplicate ? (
                            <IoCheckmark onClick={confirmAdd} />
                          ) : (
                            <IoWarningOutline />
                          )
                        ) : null
                      }
                      value={pkLic.length <= 0 ? nrle : getYear}
                      onChange={
                        pkLic.length <= 0
                          ? (e) => setNrle(e.target.value)
                          : (e) => setGetYear(e.target.value)
                      }
                      onKeyUp={verifyHandler}
                      bgcolor={
                        nrle.length >= 14 || getYear.length >= 14
                          ? !isDuplicate
                            ? 'bg-green-500'
                            : 'bg-red-500'
                          : ''
                      }
                      icocolor="text-white"
                      message={message}
                      colormessage={
                        !isDuplicate ? 'text-green-700' : 'text-red-500'
                      }
                      hovercolor={
                        !isDuplicate
                          ? 'hover:bg-green-400 hover:cursor-pointer'
                          : ''
                      }
                    />
                  )}

                  {pkLic && (
                    <button
                      className="absolute -top-8 right-0 shadow p-1 rounded-[3px]
                    text-[14px] w-[6.8rem] flex justify-center"
                      onClick={confirmDelete}
                    >
                      Excluir registro!
                    </button>
                  )}
                </div>
              ) : isSuccess ? (
                <InputBasic
                  title="2. Preencha os campos para prosseguir:"
                  border="border-[0px]"
                  widthdiv="w-[28rem]"
                  widthinput="w-[10rem]"
                  value={fkPerFilter.length <= 0 ? year : getYear}
                  onChange={
                    fkPerFilter.length <= 0
                      ? (e) => setYear(e.target.value)
                      : (e) => setGetYear(e.target.value)
                  }
                  labelYear="Ano/periodo:"
                  readOnly={true}
                  onSubmit={addRegister}
                />
              ) : (
                <>
                  {pkLic && (
                    <InputBasic
                      title="3. Transacao realizada com sucesso!"
                      border="border-[0px]"
                      widthdiv="w-[28rem]"
                      widthinput="w-[10rem]"
                      value={fkPerFilter.length <= 0 ? year : getYear}
                      onChange={
                        fkPerFilter.length <= 0
                          ? (e) => setYear(e.target.value)
                          : (e) => setGetYear(e.target.value)
                      }
                      labelYear="Ano/periodo:"
                      readOnly={true}
                      onSubmit={addRegister}
                    />
                  )}
                </>
              )}

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

                {!isConfirm && !isSuccess && (
                  <>
                    {!pkLic && (
                      <>
                        <div className="w-full flex flex-row justify-start">
                          <BtnBasic
                            bgcolor="bg-green-500"
                            bghover="hover:bg-green-400"
                            icon={
                              <IoChevronBack size={20} onClick={backVerify} />
                            }
                          />
                        </div>
                        {actionControl === 'update' && pkLic && (
                          <div className="">
                            <BtnBasic
                              bgcolor="bg-green-500"
                              bghover="hover:bg-green-400"
                              icon={
                                <TbDatabaseEdit
                                  size={20}
                                  onClick={addRegister}
                                />
                              }
                            />
                          </div>
                        )}
                        {actionControl === 'delete' && (
                          <div className="">
                            <BtnBasic
                              bgcolor="bg-orange-500"
                              bghover="hover:bg-orange-400"
                              icon={
                                <AiOutlineDelete
                                  size={20}
                                  onClick={() => deleteRecord(fkPerFilter)}
                                />
                              }
                            />
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
                <div className="">
                  <BtnBasic
                    bgcolor={!isSuccess ? 'bg-red-500' : 'bg-green-500'}
                    bghover={
                      !isSuccess ? 'hover:bg-red-400' : 'hover:bg-green-400'
                    }
                    icon={
                      !isSuccess ? <IoBanOutline size={20} /> : <IoCheckmark />
                    }
                    isOpenModal={clearFields}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* FINAL MODAL */}


      {/* START LIST LICENSES */}
      <ul className="w-auto h-auto flex flex-wrap p-3 gap-2 m-4 relative pt-10">

        {/* <BtnIsOpenModal */}
        {/*   isOpenModal={isOpenModalShow} */}
        {/*   width="w-80" */}
        {/*   hight="h-32" */}
        {/* /> */}

        {list.map((item) => (
          <li
            key={item.pkLic}
            className="w-80 h-32 bg-white rounded-md shadow p-3
              flex flex-col hover:bg-green-100 hover:cursor-pointer relative"
            onClick={() => getPkPerFilter(item.pkLic)}
          >
            <span
              className="text-[10px] absolute h-4 w-8 flex items-start
                justify-center top-4 right-4 bg-sky-700 text-white rounded-md"
            >
              {item.status}
            </span>

            <div>
              <div
                className="bg-slate-100 text-slate-800 w-[1.8rem] h-[1.8rem] flex shadow
                  items-center justify-center rounded-full"
              >
                <LiaCertificateSolid size={18} />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full h-full items-center pl-6 gap-1">
              <div className="flex flex-col items-start justify-start w-full">
                <span className="text-[14px]">{item.university}</span>
                <span className="text-[12px] -mt-1 text-slate-500">
                  Universidade/Escola
                </span>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <span className="text-[14px]">{item.nrle}</span>
                <span className="text-[12px] -mt-1 text-slate-500">Cnpj</span>
              </div>
            </div>
          </li>
        ))}

        <Pagination
          width="w-80"
          height="h-32"
          totalRecords={totalRecordsLic}
          totalPages={totalPagesLic}
          currentPage={currentPageLic}
          nextPage={nextPageLic}
          previousPage={previousPageLic}
        />
      </ul>
      {/* FINAL LIST LICENSES */}

    </>
  )
}

